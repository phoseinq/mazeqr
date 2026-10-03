// Loads the engine into a Node sandbox (a canvas that draws nothing) and hands back the people/monster
// simulation for a text, with its people, monsters and QR size exposed for the tests.
var fs = require("fs"), path = require("path"), vm = require("vm");

function ctx() {
  return new Proxy({}, {get: function (t, k) {
    if (k === "getImageData") return function (x, y, w, h) { return {data: new Uint8ClampedArray(Math.max(4, w * h * 4))}; };
    if (k in t) return t[k]; return function () { return {addColorStop: function () {}}; };
  }, set: function (t, k, v) { t[k] = v; return true; }});
}

function loadSim(text) {
  var sb = {document: {hidden: false, createElement: function () { return {isConnected: true, getContext: function () { return ctx(); }}; },
                       documentElement: {getAttribute: function () { return "light"; }}},
    performance: {now: function () { return 0; }}, requestAnimationFrame: function () { return 1; }, cancelAnimationFrame: function () {},
    console: console, Date: Date, Path2D: function () { this.moveTo = this.arc = function () {}; }};
  sb.window = sb; sb.matchMedia = function () { return {matches: false}; };
  vm.createContext(sb);
  var root = path.join(__dirname, "..");
  vm.runInContext(fs.readFileSync(path.join(root, "vendor/qrcode-generator.min.js"), "utf8") + ";\n" +
    fs.readFileSync(path.join(root, "src/maze-qr.js"), "utf8").replace("var learn = {rate: 1};", "var learn = {rate: 1}; this.__people = people; this.__mon = monsters;"), sb);
  sb.__t = text; vm.runInContext("renderArtisticQr(__t, 1000, {still: true})", sb);
  var sim = vm.runInContext("MAZE_SIMS[__t]", sb);
  if (!sim) return null;
  return {sim: sim, people: sb.__people, monsters: sb.__mon, n: vm.runInContext("generateQrMatrix(__t, MAZE).n", sb)};
}

module.exports = {loadSim: loadSim};
