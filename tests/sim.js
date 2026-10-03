// Runs the maze's people and monster for a while in Node (with a canvas that draws nothing) and
// reports how they behave: how many are inside, how many pass through to another gate, how often
// the monster catches someone, how crowded the corridors get.
//
//   node tests/sim.js [text] [minutes]
var loadSim = require("./harness").loadSim;
var TEXT = process.argv[2] || "https://example.com/s/k2o3bjF2M29lOXpjbWxj-bRUXxi21K", MIN = +process.argv[3] || 10;

var S = loadSim(TEXT);
if (!S) { console.log("this code has no maze big enough for people"); process.exit(0); }
var sim = S.sim, sb = {__people: S.people, __mon: S.monsters};

var frames = 30 * 60 * MIN, inside = 0, samples = 0, caught = 0, entries = 0, through = 0, close = 0, pairs = 0, out = 0, start = {};
for (var i = 0; i < frames; i++) {
  var before = sb.__people.map(function (p) { return {mode: p.mode, gone: p.gone}; });
  sim.step(1 / 30);
  sb.__people.forEach(function (p, j) {
    if (p.gone > 1.35 && !(before[j].gone > 0)) caught++;
    if (before[j].mode === "enter" && p.mode === "maze") { entries++; start[j] = p.a[0] * 999 + p.a[1]; }
    if (before[j].mode === "maze" && p.mode === "exit" && start[j] != null) { if (start[j] !== p.a[0] * 999 + p.a[1]) through++; start[j] = null; }
  });
  if (i % 10) continue;
  var m = sb.__people.filter(function (p) { return p.mode === "maze" && !p.gone; }); inside += m.length; samples++;
  if (sb.__mon[0].mode === "trip") out++;
  for (var a = 0; a < m.length; a++) for (var b = a + 1; b < m.length; b++) { pairs++; if (Math.hypot(m[a].x - m[b].x, m[a].y - m[b].y) < 1.5) close++; }
}
console.log("simulated " + MIN + " min · people inside on average: " + (inside / samples).toFixed(1) + " of " + sb.__people.length);
console.log("entries: " + entries + ", left by another gate: " + (entries ? Math.round(100 * through / entries) : 0) + "%");
console.log("caught by the monster: " + (caught / MIN).toFixed(2) + " per minute · monster outside: " + Math.round(100 * out / samples) + "% of the time");
console.log("pairs of people closer than 1.5 cells: " + (pairs ? (100 * close / pairs).toFixed(1) : 0) + "%");
