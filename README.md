# Maze QR

A real, scannable QR code drawn as a living hedge maze: people wander it, a monster hunts them,
a forest by day and a city by night grow round it. Plain JavaScript and Canvas, no server, no CDN.

| Day | Night | On copy | Debug view |
|---|---|---|---|
| ![day](docs/day.png) | ![night](docs/night.png) | ![copy](docs/copy-night.png) | ![debug](docs/debug.png) |

**Live:** [demo](https://phoseinq.github.io/mazeqr/demo/) · [gallery](https://phoseinq.github.io/mazeqr/demo/gallery.html)

## How it stays readable

The art is a skin over a valid QR from [qrcode-generator](https://github.com/kazuhikoarase/qrcode-generator).
Finder, timing, alignment, format and version modules are drawn intact and nothing walks over them. After every
frame, the centre of each module is clamped back to its bit's tone, so moving sprites never flip a bit.
`verifyCores(canvas)` checks a frame.

## Use

```html
<script src="vendor/qrcode-generator.min.js"></script>
<script src="src/maze-qr.js"></script>
<script>
  var canvas = renderArtisticQr("https://example.com/", 1000);   // live; follows <html data-theme="dark">
  document.body.appendChild(canvas);
  mazeCheer("https://example.com/");                             // the "copied" reaction
</script>
```

Options: `night`, `still` (one frame), `motion` (animate even with reduced motion), `fps`, `time`,
`characters` / `props`, `thumb` + `lens` (a small live icon), `debug`. Tunables live in `MAZE` at the top of
`src/maze-qr.js`.

## Tests

```
node tests/sim.js "https://example.com/" 10          # people and monster, simulated in Node
python tests/read_test.py tests/dump.html             # decoders (ZXing, ZBar, quirc) on headless renders; see the file
```

Sample run, 300 reads: ZXing 99.3%, ZBar 95.7%, quirc 95.7%.

## Licence

MIT. Includes qrcode-generator by Kazuhiko Arase (MIT).
