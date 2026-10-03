# Changelog

## 1.0.0 — 2026-10-03

First release.

- `dist/mazeqr.js` and `dist/mazeqr.min.js`: qrcode-generator and the engine in one file. A plain `<script>` defines `renderArtisticQr`, `mazeCheer`, `verifyCores` and `MAZE`; through a bundler it is a CommonJS module with TypeScript types (`dist/mazeqr.d.ts`).
- Served from jsDelivr: `https://cdn.jsdelivr.net/gh/phoseinq/mazeqr@1.0.0/dist/mazeqr.min.js`.
- The crowd: people flee along routes the monster can't reach first, vault a hedge when cornered (then wait 30 s), leave by the gate furthest from the monster, pass each other head-on in one-cell corridors, and spread across the maze instead of piling up in one spot.
- The monster's trips round the garden no longer cut across a finder pattern.
- `motion: true` animates even when the system asks for reduced motion.
- Tested in CI: three decoders (ZXing, ZBar, quirc) on 300 reads, the crowd's behaviour over 15 simulated minutes per code, and the built files.
