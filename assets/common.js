/* Shared behaviour for all Sakura designs:
   1. Left/right arrows to switch between the three designs (same page type)
   2. Loads restaurant photos from /images into [data-img] slots
   3. Swaps in the real logo (images/logo.png) when it exists
   4. Draws the Sakura crest into .mon elements */
(function () {
  var DESIGNS = ["design-1", "design-2", "design-3"];
  var NAMES = ["Minimal Ink", "Night Counter", "Blossom Circles"];

  // ---- 1. Design switcher ----
  var parts = location.pathname.split("/");
  var file = parts.pop() || "index.html";
  var dir = parts.pop();
  var i = DESIGNS.indexOf(dir);
  if (i >= 0) {
    var page = file.indexOf("menu") === 0 ? "menu.html" : "index.html";
    var prev = DESIGNS[(i + DESIGNS.length - 1) % DESIGNS.length];
    var next = DESIGNS[(i + 1) % DESIGNS.length];
    var arrow = function (d) {
      return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="' +
        (d === "l" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7") + '"/></svg>';
    };
    var wrap = document.createElement("div");
    wrap.innerHTML =
      '<a class="sw sw-l" href="../' + prev + "/" + page + '" aria-label="Previous design">' + arrow("l") + "</a>" +
      '<a class="sw sw-r" href="../' + next + "/" + page + '" aria-label="Next design">' + arrow("r") + "</a>" +
      '<div class="sw-label">Design ' + (i + 1) + " of 3 · " + NAMES[i] + "</div>";
    while (wrap.firstChild) document.body.appendChild(wrap.firstChild);
    document.addEventListener("keydown", function (e) {
      if (e.target.closest && e.target.closest("input,textarea")) return;
      if (e.key === "ArrowLeft") location.href = "../" + prev + "/" + page;
      if (e.key === "ArrowRight") location.href = "../" + next + "/" + page;
    });
  }

  // ---- 2. Photo slots ----
  var EXTS = ["jpg", "jpeg", "png", "webp"];
  function tryLoad(base, idx, ok) {
    if (idx >= EXTS.length) return;
    var src = base + "." + EXTS[idx];
    var im = new Image();
    im.onload = function () { ok(src); };
    im.onerror = function () { tryLoad(base, idx + 1, ok); };
    im.src = src;
  }
  document.querySelectorAll("[data-img]").forEach(function (el) {
    var name = el.getAttribute("data-img");
    el.classList.add("ph");
    el.setAttribute("data-label", name + ".jpg");
    tryLoad("../images/" + name, 0, function (src) {
      el.style.backgroundImage = 'url("' + src + '")';
      el.classList.add("loaded");
    });
  });

  // ---- 3. Real logo ----
  tryLoad("../images/logo", 0, function (src) {
    document.querySelectorAll("[data-logo]").forEach(function (el) {
      el.innerHTML = '<img src="' + src + '" alt="Sakura" style="max-height:' + (el.getAttribute("data-logo") || "70") + 'px;width:auto">';
    });
  });

  // ---- 4. Sakura crest (mon), after the flower on the shop sign ----
  function mon(fill, line, centre) {
    var P = Math.PI / 180, s = '<svg viewBox="-50 -50 100 100" aria-hidden="true"><g fill="' + fill + '">';
    for (var k = 0; k < 5; k++) {
      var a = (k * 72 - 90) * P;
      s += '<circle cx="' + (31 * Math.cos(a)).toFixed(2) + '" cy="' + (31 * Math.sin(a)).toFixed(2) + '" r="18"/>';
    }
    s += '<circle r="31"/></g>';
    for (var j = 0; j < 5; j++) {
      var b = (j * 72 - 54) * P;
      s += '<line x1="' + (25 * Math.cos(b)).toFixed(2) + '" y1="' + (25 * Math.sin(b)).toFixed(2) + '" x2="' + (49 * Math.cos(b)).toFixed(2) + '" y2="' + (49 * Math.sin(b)).toFixed(2) + '" stroke="' + line + '" stroke-width="2.4"/>';
    }
    var inner = "", innerFill = "";
    for (var m = 0; m < 5; m++) {
      var c = (m * 72 - 90) * P, x = (14 * Math.cos(c)).toFixed(2), y = (14 * Math.sin(c)).toFixed(2);
      inner += '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + line + '"/>';
      innerFill += '<circle cx="' + x + '" cy="' + y + '" r="8.8" fill="' + fill + '"/>';
    }
    s += inner + innerFill;
    s += '<circle r="10.5" fill="' + line + '"/><circle r="8.3" fill="' + centre + '"/>';
    return s + "</svg>";
  }
  document.querySelectorAll(".mon").forEach(function (el) {
    var fill = el.getAttribute("data-fill") || "#7d1d2b";
    el.innerHTML = mon(fill, el.getAttribute("data-line") || "#ffffff", el.getAttribute("data-centre") || fill);
  });

  // ---- Mobile menu toggles ----
  document.querySelectorAll("[data-toggle]").forEach(function (b) {
    b.addEventListener("click", function () {
      document.querySelector(b.getAttribute("data-toggle")).classList.toggle("open");
    });
  });
})();
