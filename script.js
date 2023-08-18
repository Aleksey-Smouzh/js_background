function lines() {
  let sizeW = Math.random() * 12;
  let duration = Math.random() * 3;
  (r = Math.floor(Math.random() * 256)),
    (g = Math.floor(Math.random() * 256)),
    (b = Math.floor(Math.random() * 256)),
    (color = "#" + r.toString(16) + g.toString(16) + b.toString(16));

  let e = document.createElement("div");
  e.setAttribute("class", "line");
  document.body.appendChild(e);
  e.style.width = 2 + sizeW + "px";
  e.style.left = Math.random() * +innerWidth + "px";
  e.style.animationDuration = 2 + duration + "s";
  e.style.background = color;
  setTimeout(function () {
    document.body.removeChild(e);
  }, 5000);
}

setInterval(function () {
  lines();
}, 200);
