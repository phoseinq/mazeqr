// Builds the single-file distribution:
//   dist/mazeqr.js      qrcode-generator + the engine, readable
//   dist/mazeqr.min.js  the same, minified
// As a classic <script> it defines the same globals as the two source files; under CommonJS
// (bundlers, require) it exports them instead.
//
//   npm run build
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { minify } from "terser";

const root = new URL("..", import.meta.url);
const read = (p) => readFileSync(new URL(p, root), "utf8").replace(/\r\n/g, "\n");
const pkg = JSON.parse(read("package.json"));

// qrcode-generator ends with a UMD block that would hand module.exports (or an anonymous AMD
// module) to qrcode itself; inside this bundle qrcode is an internal, so that block goes
let vendor = read("vendor/qrcode-generator.min.js").replace(/\n\/\/# sourceMappingURL=.*\n?/, "\n");
const umd = /,function\(t\)\{"function"==typeof define&&define\.amd\?define\(\[\],t\):"object"==typeof exports&&\(module\.exports=t\(\)\)\}\(\(function\(\)\{return qrcode\}\)\);\s*$/;
if (!umd.test(vendor)) throw new Error("qrcode-generator's UMD footer changed; update scripts/build.mjs");
vendor = vendor.replace(umd, ";\n");

const engine = read("src/maze-qr.js");
const banner = `/*! ${pkg.name} ${pkg.version} | ${pkg.homepage} | MIT licence
 *  includes qrcode-generator 1.4.4 by Kazuhiko Arase (MIT) | https://github.com/kazuhikoarase/qrcode-generator */`;
const exportsBlock = `
if (typeof module === "object" && module && module.exports) {
  module.exports = {renderArtisticQr: renderArtisticQr, mazeCheer: mazeCheer, verifyCores: verifyCores, MAZE: MAZE, qrcode: qrcode};
}
`;
const full = `${banner}\n${vendor.trim()}\n\n${engine.trim()}\n${exportsBlock}`;

const min = await minify(full, {
  compress: { passes: 2 },
  mangle: { reserved: ["renderArtisticQr", "mazeCheer", "verifyCores", "MAZE", "MAZE_SIMS", "MAZE_COPY", "qrcode"] },
  toplevel: false,                       // top-level names are the public globals: keep them
  format: { comments: /^!/ },
});

mkdirSync(new URL("dist/", root), { recursive: true });
writeFileSync(new URL("dist/mazeqr.js", root), full);
writeFileSync(new URL("dist/mazeqr.min.js", root), min.code + "\n");
console.log(`dist/mazeqr.js ${(full.length / 1024).toFixed(1)} KB, dist/mazeqr.min.js ${(min.code.length / 1024).toFixed(1)} KB`);
