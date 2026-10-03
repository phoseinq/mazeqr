"""python docs/save_shots.py docs/shots_dump.html -- writes the PNGs next to this file"""
import base64, html, io, json, os, re, sys
from PIL import Image
here = os.path.dirname(os.path.abspath(__file__))
dom = io.open(sys.argv[1], encoding="utf-8").read()
data = json.loads(html.unescape(re.search(r'<textarea id="out">(.*?)</textarea>', dom, re.S).group(1)))
for name, url in data.items():
    im = Image.open(io.BytesIO(base64.b64decode(url.split(",", 1)[1]))).convert("RGB").resize((700, 700), Image.LANCZOS)
    im.save(os.path.join(here, name + ".png"), optimize=True); print(name)
