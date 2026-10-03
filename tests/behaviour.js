// Regression checks on how the people and the monster behave, for several codes. Prints a table and
// exits 1 if any check fails. Guards the bugs that made crowds freeze: pacing in gateless pockets,
// everyone fleeing to one cell, waiting to be eaten, head-on deadlocks, routes across a finder.
//
//   node tests/behaviour.js [minutes]
var loadSim = require("./harness").loadSim;
var MIN = +process.argv[2] || 15, DT = 1 / 30;
var TEXTS = ["https://example.com/hello-maze", "https://example.org/menu", "https://example.net/a/b/c?x=1",
  "https://example.com/s/k2o3bjF2M29lOXpjbWxj-bRUXxi21K"];
var LIMITS = {longestClump: 15, clumpShare: .12, finderSeconds: 0};

function run(text) {
  var S = loadSim(text); if (!S) return null;
  var people = S.people, M0 = S.monsters[0], n = S.n, W = 4 / DT, total = Math.round(60 * MIN / DT);
  var hist = people.map(function () { return []; }), finders = [[0, 0], [0, n - 8], [n - 8, 0]];
  var r = {clump: 0, longest: 0, run: 0, finder: 0, chases: 0, vaults: 0, caught: 0, inside: 0, samples: 0};
  var was = people.map(function (p) { return {flee: false, hop: false, gone: 0}; });
  for (var i = 0; i < total; i++) {
    S.sim.step(DT);
    people.forEach(function (p, j) {
      var w = was[j];
      // a chase starts; a hedge vaulted during a chase; someone caught
      if (p.flee && !w.flee) r.chases++; if (p.hop && p.flee && !w.hop) r.vaults++; if (p.gone > 0 && !(w.gone > 0)) r.caught++;
      w.flee = !!p.flee; w.hop = !!p.hop; w.gone = p.gone;
      var h = hist[j]; h.push(p.mode === "maze" && !p.gone ? [p.x, p.y] : null); if (h.length > W) h.shift();
    });
    S.monsters.forEach(function (M) {                       // the monster's body (about a module round) never on a finder
      if (finders.some(function (b) { var cx = Math.max(b[1], Math.min(b[1] + 8, M.x)), cy = Math.max(b[0], Math.min(b[0] + 8, M.y));
        return Math.hypot(M.x - cx, M.y - cy) < 1; })) r.finder += DT; });
    if (i % 10 === 0) { r.inside += people.filter(function (p) { return p.mode === "maze" && !p.gone; }).length; r.samples++; }
    if (i < W) continue;
    // a clump: 3+ people inside, each kept within a 1.5-module box for 4 s, close together
    var still = people.filter(function (p, j) { var h = hist[j]; if (h.some(function (q) { return !q; })) return false;
      var xs = h.map(function (q) { return q[0]; }), ys = h.map(function (q) { return q[1]; });
      return Math.max.apply(0, xs) - Math.min.apply(0, xs) < 1.5 && Math.max.apply(0, ys) - Math.min.apply(0, ys) < 1.5; });
    var c = still.some(function (a) { return still.filter(function (b) { return Math.hypot(a.x - b.x, a.y - b.y) < 2.5; }).length >= 3; });
    if (c) { r.clump += DT; r.run += DT; r.longest = Math.max(r.longest, r.run); } else r.run = 0;
  }
  return {text: text, n: n, people: people.length, inside: r.inside / r.samples, caught: r.caught / MIN,
    vaultShare: r.chases ? r.vaults / r.chases : 0, clumpShare: r.clump / (60 * MIN), longest: r.longest, finder: r.finder};
}

var rows = TEXTS.map(run).filter(Boolean), fails = [];
console.log("simulated " + MIN + " min per code\n");
console.log("| code | QR | inside (avg) | caught /min | chases ending in a vault | time clumped | longest clump | monster on a finder |");
console.log("|---|---|---|---|---|---|---|---|");
rows.forEach(function (r) {
  console.log("| `" + r.text.replace(/^https:\/\//, "") + "` | " + r.n + "×" + r.n + " | " + r.inside.toFixed(1) + " of " + r.people + " | " + r.caught.toFixed(1) +
    " | " + Math.round(100 * r.vaultShare) + "% | " + (100 * r.clumpShare).toFixed(1) + "% | " + r.longest.toFixed(1) + " s | " + r.finder.toFixed(1) + " s |");
  if (r.longest > LIMITS.longestClump) fails.push(r.text + ": a clump lasted " + r.longest.toFixed(1) + " s (limit " + LIMITS.longestClump + ")");
  if (r.clumpShare > LIMITS.clumpShare) fails.push(r.text + ": clumped " + (100 * r.clumpShare).toFixed(1) + "% of the time");
  if (r.finder > LIMITS.finderSeconds) fails.push(r.text + ": the monster crossed a finder pattern");
  if (!(r.caught > 0)) fails.push(r.text + ": the monster never caught anyone");
  if (!(r.vaultShare > 0)) fails.push(r.text + ": nobody ever vaulted a hedge");
  if (!(r.inside > 3)) fails.push(r.text + ": the maze is nearly empty");
});
if (fails.length) { console.log("\nFAIL\n- " + fails.join("\n- ")); process.exit(1); }
console.log("\nall behaviour checks pass");
