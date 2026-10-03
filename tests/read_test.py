"""Read every render from tests/render.html under three families of conditions with three decoders
(ZXing, ZBar, and quirc via OpenCV) and print a report.

    pip install pillow numpy zxing-cpp pyzbar opencv-python-headless
    python tests/read_test.py tests/dump.html
"""
import base64, html, io, json, random, re, sys
from collections import defaultdict

import cv2
import numpy as np
import zxingcpp
from PIL import Image, ImageEnhance, ImageFilter
from pyzbar import pyzbar

dom = io.open(sys.argv[1] if len(sys.argv) > 1 else "tests/dump.html", encoding="utf-8").read()
data = json.loads(html.unescape(re.search(r'<textarea id="out">(.*?)</textarea>', dom, re.S).group(1)))
DET = cv2.QRCodeDetector()


def reads(img, text):
    z = any(r.text == text for r in zxingcpp.read_barcodes(img))
    b = any(r.data.decode("utf-8", "replace") == text for r in pyzbar.decode(img.convert("L")))
    try:
        q = DET.detectAndDecode(cv2.cvtColor(np.asarray(img), cv2.COLOR_RGB2BGR))[0] == text
    except Exception:
        q = False
    return z, b, q


def jpeg(img, quality):
    buf = io.BytesIO(); img.save(buf, "JPEG", quality=quality); buf.seek(0)
    return Image.open(buf).convert("RGB")


def camera(im, rnd):
    """like a phone photographing the screen: a tilt, a little blur, noise, a scale, ordinary JPEG"""
    w, h = im.size; d = lambda: rnd.uniform(-.06, .06) * w
    src = [(0, 0), (w, 0), (w, h), (0, h)]; dst = [(d(), d()), (w + d(), d()), (w + d(), h + d()), (d(), h + d())]
    A, B = [], []
    for (x, y), (u, v) in zip(dst, src):
        A += [[x, y, 1, 0, 0, 0, -u * x, -u * y], [0, 0, 0, x, y, 1, -v * x, -v * y]]; B += [u, v]
    t = im.transform((w, h), Image.PERSPECTIVE, tuple(np.linalg.solve(np.array(A), np.array(B))), Image.BICUBIC, fillcolor=(30, 30, 30))
    s = rnd.uniform(.35, .7)
    t = t.resize((int(w * s), int(h * s)), Image.BILINEAR).filter(ImageFilter.GaussianBlur(rnd.uniform(.4, 1.3)))
    a = np.asarray(t).astype(np.int16) + np.random.RandomState(rnd.randint(0, 9999)).normal(0, rnd.uniform(3, 9), (t.size[1], t.size[0], 3)).astype(np.int16)
    return jpeg(Image.fromarray(np.clip(a, 0, 255).astype(np.uint8)), rnd.randint(55, 85))


FAMILIES = {
    "normal": lambda im, r: [im, im.resize((im.width // 2,) * 2, Image.LANCZOS), im.resize((int(im.width * .4),) * 2, Image.LANCZOS)],
    "hard": lambda im, r: [im.filter(ImageFilter.GaussianBlur(1.6)), jpeg(im, 50), jpeg(im.resize((int(im.width * .6),) * 2, Image.LANCZOS), 30),
                           ImageEnhance.Contrast(im).enhance(.6)],
    "camera": lambda im, r: [camera(im, r) for _ in range(8)],
}
stat = defaultdict(lambda: [0, 0, 0, 0]); errors = []; bad_cores = 0; rnd = random.Random(11)
for name, v in sorted(data.items()):
    if "err" in v: errors.append((name, v["err"])); continue
    if v["cores"]["bad"]: bad_cores += 1
    im = Image.open(io.BytesIO(base64.b64decode(v["png"].split(",", 1)[1]))).convert("RGB")
    for fam, make in FAMILIES.items():
        for t in make(im, rnd):
            z, b, q = reads(t, v["u"])
            for k in (fam, "all"):
                s = stat[k]; s[0] += 1; s[1] += z; s[2] += b; s[3] += q
pct = lambda a, b: "%5.1f%%" % (100.0 * a / b if b else 0)
print("renders:", len(data), " errors:", errors or 0, " renders with a core out of tone:", bad_cores)
print("%-8s %6s  %7s  %7s  %12s" % ("", "reads", "ZXing", "ZBar", "quirc/OpenCV"))
for k in ["normal", "hard", "camera", "all"]:
    s = stat[k]; print("%-8s %6d  %7s  %7s  %12s" % (k, s[0], pct(s[1], s[0]), pct(s[2], s[0]), pct(s[3], s[0])))
