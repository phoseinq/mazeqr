// Checks the built files in dist/: as a classic <script> they define the same globals as the
// two source files, under require() they export them, and the minified build draws exactly
// what the readable one does. Exits 1 on any failure.
//
//   npm run build && node tests/dist.js
var fs = require("fs"), path = require("path"), vm = require("vm"), sandbox = require("./harness").sandbox;
var root = path.join(__dirname, ".."), fails = [], TEXT = "https://example.com/hello-maze";
function check(ok, msg) { console.log((ok ? "ok   " : "FAIL ") + msg); if (!ok) fails.push(msg); }
function read(p) { return fs.readFileSync(path.join(root, p), "utf8"); }

// the reference: the two source files, as the demo loads them
var src = sandbox();
vm.runInContext(read("vendor/qrcode-generator.min.js") + ";\n" + read("src/maze-qr.js"), src);
var refMatrix = JSON.stringify(vm.runInContext("generateQrMatrix(" + JSON.stringify(TEXT) + ", MAZE).dark", src));

["dist/mazeqr.js", "dist/mazeqr.min.js"].forEach(function (f) {
  var code = read(f), sb = sandbox();
  vm.runInContext(code, sb);
  check(["renderArtisticQr", "mazeCheer", "verifyCores", "MAZE", "qrcode"].every(function (k) { return k in sb; }), f + ": defines the globals as a <script>");
  check(!("module" in sb) && !sb.define, f + ": no module or AMD leakage in a plain page");
  var still = vm.runInContext("renderArtisticQr(" + JSON.stringify(TEXT) + ", 800, {still: true})", sb);
  check(!!still && still.__layout && still.__layout.n === 29, f + ": draws a 29×29 code");
  check(JSON.stringify(still.__layout.dark) === refMatrix, f + ": same QR bits as the source files");
  check(vm.runInContext("renderArtisticQr('x'.repeat(5000), 800, {still: true})", sb) === null, f + ": null for text too long for a QR code");

  // CommonJS: what require() gives a bundler
  var mod = {exports: {}}, cjs = sandbox(); cjs.module = mod; cjs.exports = mod.exports;
  vm.runInContext(code, cjs);
  check(typeof mod.exports.renderArtisticQr === "function" && typeof mod.exports.mazeCheer === "function" &&
        typeof mod.exports.verifyCores === "function" && typeof mod.exports.MAZE === "object", f + ": require() exports the API");
  check(typeof mod.exports.qrcode === "function" && mod.exports !== mod.exports.qrcode, f + ": exports the engine, not qrcode-generator's own UMD export");
});

var pkg = JSON.parse(read("package.json")), head = read("dist/mazeqr.min.js").slice(0, 200);
check(head.indexOf(pkg.version) >= 0 && /qrcode-generator.*MIT/.test(head), "the minified build keeps its licence banner and version " + pkg.version);
if (fails.length) { console.log("\n" + fails.length + " failed"); process.exit(1); }
console.log("\ndist checks pass");
