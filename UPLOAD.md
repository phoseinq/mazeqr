# راهنمای آپلود این پوشه در GitHub

این پوشه (`maze-qr`) کامل و آماده‌ی انتشار است. **هیچ اطلاعات شخصی، دامنه، لینک واقعی، توکن، آی‌پی یا نام کاربری در آن نیست**؛ همه‌ی نمونه‌ها با `example.com` ساخته شده‌اند و عکس‌های پوشه‌ی `docs` هم فقط همین آدرس را رمزگذاری کرده‌اند.

## داخل پوشه چیست

| مسیر | چیست |
|---|---|
| `src/maze-qr.js` | موتور اصلی: QR واقعی + هزارتو + آدم‌ها + هیولا + روز/شب |
| `vendor/qrcode-generator.min.js` | کتابخانه‌ی ساخت QR (MIT، از Kazuhiko Arase) |
| `demo/index.html` | دموی تعاملی: متن دلخواه، دکمه‌ی روز/شب، واکنش کپی، ذخیره‌ی PNG |
| `demo/gallery.html` | گالری چند نمونه (روز و شب) |
| `tests/render.html` + `tests/read_test.py` | تست خوانایی با سه موتور (ZXing، ZBar، quirc/OpenCV) |
| `tests/sim.js` | شبیه‌سازی رفتار آدم‌ها و هیولا در Node |
| `docs/*.png` | عکس‌های README |
| `README.md` | توضیحات پروژه (انگلیسی + خلاصه‌ی فارسی) |
| `LICENSE` | مجوز MIT |

دموها را می‌شود همین الان با باز کردن `demo/index.html` در مرورگر دید (بدون سرور).

## آپلود دستی (سه روش، یکی را انتخاب کن)

**۱) از سایت GitHub (ساده‌ترین):** در github.com یک مخزن جدید بساز (مثلاً `mazeqr`)، بعد «uploading an existing file»
و کل محتوای این پوشه را بکش و رها کن. (پوشه‌ها حفظ می‌شوند.)

**۲) با git:**
```
cd maze-qr
git init -b main
git add -A
git commit -m "Maze QR: a scannable QR code drawn as a living hedge maze"
git remote add origin https://github.com/<USERNAME>/mazeqr.git
git push -u origin main
```

**۳) با GitHub CLI** (روی این سرور نصب شده: `C:\Program Files\GitHub CLI\gh.exe`):
```
gh auth login
cd maze-qr
git init -b main && git add -A && git commit -m "Maze QR"
gh repo create mazeqr --public --source . --push
```

اختیاری: در تنظیمات مخزن **Pages** را روی شاخه‌ی `main` روشن کن تا دمو آنلاین شود:
`https://<USERNAME>.github.io/mazeqr/demo/`

---

## پرامپت آماده برای یک مدل (کپی کن و بده)

```
In the folder "maze-qr" (on the Desktop) there is a finished JavaScript project. Publish it to my GitHub:

1. Check the folder contains no personal data before publishing: search all files for real domains, tokens,
   IP addresses, usernames or e-mail addresses (only example.com / example.org / example.net may appear).
   If you find anything else, stop and tell me.
2. Create a new repository named "mazeqr" on my GitHub account (ask me whether it should be public or private).
3. Initialise git in the folder with branch "main", commit everything with the message
   "Maze QR: a scannable QR code drawn as a living hedge maze", add the new repository as origin and push.
4. Enable GitHub Pages from the main branch (root) and give me the URL of demo/index.html.
5. Do not change any file in the folder except what is needed to publish.
```
