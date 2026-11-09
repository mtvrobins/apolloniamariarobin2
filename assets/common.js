/* Shared behaviour for all Sakura designs:
   1. Left/right arrows to switch between the three designs (same page type)
   2. Loads restaurant photos from /images into [data-img] slots
   3. Swaps in the real logo (images/logo.png) when it exists
   4. Draws the cherry-blossom mark into .blossom elements */
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

  // ---- 4. Blossom mark ----
  var petal = "M0,-5 C-10,-14 -12,-30 -5,-41 L0,-35 L5,-41 C12,-30 10,-14 0,-5Z";
  function blossom(fill, centre) {
    var s = '<svg viewBox="-46 -46 92 92" aria-hidden="true">';
    for (var k = 0; k < 5; k++) s += '<path d="' + petal + '" fill="' + fill + '" transform="rotate(' + k * 72 + ')"/>';
    s += '<circle r="5" fill="' + centre + '"/>';
    for (var j = 0; j < 5; j++) s += '<circle cx="0" cy="-11" r="1.6" fill="' + centre + '" transform="rotate(' + (j * 72 + 36) + ')"/>';
    return s + "</svg>";
  }
  document.querySelectorAll(".blossom").forEach(function (el) {
    el.innerHTML = blossom(el.getAttribute("data-fill") || "#e9b3bd", el.getAttribute("data-centre") || "#a3304b");
  });

  // ---- Mobile menu toggles ----
  document.querySelectorAll("[data-toggle]").forEach(function (b) {
    b.addEventListener("click", function () {
      document.querySelector(b.getAttribute("data-toggle")).classList.toggle("open");
    });
  });
})();
