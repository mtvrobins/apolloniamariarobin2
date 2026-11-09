/* Japanese decorative art for the Sakura designs, drawn as SVG:
   - data-orn="branch"  ink-painted cherry blossom branch (sumi-e style)
   - data-orn="enso"    brushed ink circle
   - data-orn="wave"    seigaiha (青海波) wave band
   - data-orn="brush"   single horizontal ink brush stroke
   - .petals            falling cherry blossom petals (static when reduced motion is set)
   Options: data-ink (stroke colour), data-bloom (petal colour), data-flip (mirror). */
(function () {
  var uid = 0;
  function inkFilter(id, scale) {
    return '<filter id="' + id + '" x="-10%" y="-10%" width="120%" height="120%">' +
      '<feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="n"/>' +
      '<feDisplacementMap in="SourceGraphic" in2="n" scale="' + (scale || 3) + '"/></filter>';
  }

  var PETAL = "M0,-5 C-10,-14 -12,-30 -5,-41 L0,-35 L5,-41 C12,-30 10,-14 0,-5Z";
  function flower(x, y, r, rot, bloom, edge) {
    var s = r / 41, g = '<g transform="translate(' + x + ',' + y + ') rotate(' + rot + ') scale(' + s.toFixed(3) + ')">';
    for (var k = 0; k < 5; k++) g += '<path d="' + PETAL + '" fill="' + bloom + '" stroke="' + edge + '" stroke-width="1.6" transform="rotate(' + k * 72 + ')"/>';
    for (var j = 0; j < 5; j++) g += '<line x1="0" y1="0" x2="0" y2="-15" stroke="#b2244a" stroke-width="1.6" transform="rotate(' + (j * 72 + 36) + ')"/><circle cx="0" cy="-16" r="2.4" fill="#b2244a" transform="rotate(' + (j * 72 + 36) + ')"/>';
    return g + '<circle r="5" fill="#d93a64"/></g>';
  }

  function branch(ink, bloom) {
    var id = "ink" + (++uid);
    var edge = "#e98aa6";
    var s = '<svg viewBox="0 0 520 260" aria-hidden="true"><defs>' + inkFilter(id, 4) + '</defs>' +
      '<g filter="url(#' + id + ')" fill="none" stroke="' + ink + '" stroke-linecap="round">' +
      '<path d="M-10,36 C70,28 140,58 210,70 S330,110 400,152 S470,202 525,214" stroke-width="10"/>' +
      '<path d="M150,57 C175,36 200,22 242,12" stroke-width="5"/>' +
      '<path d="M300,101 C318,128 330,160 344,192" stroke-width="5"/>' +
      '<path d="M420,163 C446,142 470,134 503,120" stroke-width="4"/>' +
      '<path d="M80,38 C95,22 110,16 128,14" stroke-width="3"/>' +
      '<path d="M250,80 C262,96 268,104 286,108" stroke-width="2.5"/>' +
      '<path d="M370,138 C380,118 392,108 410,104" stroke-width="3"/>' +
      '</g>';
    var F = [[120,46,15,10],[205,36,13,40],[242,13,10,-15],[262,84,17,25],[331,118,14,0],[345,188,12,50],[410,104,13,-30],[412,154,16,15],[470,134,12,35],[504,120,9,-10],[128,14,10,20],[62,34,9,5]];
    F.forEach(function (f) { s += flower(f[0], f[1], f[2], f[3], bloom, edge); });
    [[178,40,4],[290,106,4.5],[440,150,4],[100,30,3.5],[360,150,4]].forEach(function (b) {
      s += '<ellipse cx="' + b[0] + '" cy="' + b[1] + '" rx="' + b[2] + '" ry="' + (b[2] * 1.4) + '" fill="#e8708f"/>';
    });
    return s + "</svg>";
  }

  function enso(ink) {
    var id = "ink" + (++uid);
    return '<svg viewBox="0 0 200 200" aria-hidden="true"><defs>' + inkFilter(id, 6) + '</defs>' +
      '<g filter="url(#' + id + ')" fill="none" stroke="' + ink + '" stroke-linecap="round">' +
      '<path d="M150,40 C120,18 60,22 36,62 C12,104 32,158 82,174 C130,190 178,160 180,108 C181,86 172,66 160,54" stroke-width="13"/>' +
      '<path d="M160,54 C166,62 170,68 172,76" stroke-width="7"/></g></svg>';
  }

  function brush(ink) {
    var id = "ink" + (++uid);
    return '<svg viewBox="0 0 400 30" preserveAspectRatio="none" aria-hidden="true"><defs>' + inkFilter(id, 5) + '</defs>' +
      '<path filter="url(#' + id + ')" d="M6,17 C60,9 140,12 210,13 C280,14 340,10 394,16 C340,22 270,20 200,21 C130,22 60,24 6,17Z" fill="' + ink + '"/></svg>';
  }

  // Seigaiha tile: rows of concentric scallops
  function seigaihaURI(stroke, fill) {
    var t = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="24" viewBox="0 0 48 24">';
    [[0, 12], [48, 12], [24, 24], [0, 36], [48, 36]].forEach(function (c) {
      t += '<g transform="translate(' + c[0] + ',' + c[1] + ')">';
      [24, 18, 12, 6].forEach(function (r, i) {
        t += '<circle r="' + r + '" fill="' + (i === 0 ? fill : "none") + '" stroke="' + stroke + '" stroke-width="1.3"/>';
      });
      t += "</g>";
    });
    t += "</svg>";
    return 'url("data:image/svg+xml,' + encodeURIComponent(t) + '")';
  }

  document.querySelectorAll("[data-orn]").forEach(function (el) {
    var kind = el.getAttribute("data-orn"), ink = el.getAttribute("data-ink") || "#1b1617";
    var bloom = el.getAttribute("data-bloom") || "#f7c3d0";
    el.setAttribute("aria-hidden", "true");
    if (kind === "branch") el.innerHTML = branch(ink, bloom);
    else if (kind === "enso") el.innerHTML = enso(ink);
    else if (kind === "brush") el.innerHTML = brush(ink);
    else if (kind === "wave") {
      el.style.backgroundImage = seigaihaURI(ink, el.getAttribute("data-fill") || "transparent");
      el.style.backgroundSize = (el.getAttribute("data-size") || "48") + "px auto";
    }
    if (el.hasAttribute("data-flip")) el.style.transform = (el.style.transform || "") + " scaleX(-1)";
  });

  // Falling petals
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll(".petals").forEach(function (box) {
    var n = +(box.getAttribute("data-count") || 14), html = "";
    for (var i = 0; i < n; i++) {
      var left = Math.random() * 100, size = 9 + Math.random() * 10, dur = 10 + Math.random() * 10;
      var delay = -Math.random() * dur, top = Math.random() * 90;
      html += '<span class="petal" style="left:' + left.toFixed(1) + '%;width:' + size.toFixed(0) + 'px;height:' + size.toFixed(0) + 'px;' +
        (reduce ? 'top:' + top.toFixed(0) + '%;' : 'animation-duration:' + dur.toFixed(1) + 's,' + (dur / 3).toFixed(1) + 's;animation-delay:' + delay.toFixed(1) + 's,' + delay.toFixed(1) + 's;') +
        '"><svg viewBox="-12 -42 24 40"><path d="' + PETAL + '" fill="#f6b6c8" stroke="#ea8ba6" stroke-width="1.5"/></svg></span>';
    }
    box.innerHTML = html;
    box.setAttribute("aria-hidden", "true");
  });
})();
