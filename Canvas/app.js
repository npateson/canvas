let canvas = document.querySelector(".canvas");
let ctx = canvas.getContext("2d")
let painting = false;

function startPainting(e) {
  painting = true;
  draw(e)

}

function stopPainting(e) {
  painting = false;
  ctx.beginPath();
}

function draw(e) {
  if (!painting) return;
  ctx.lineWidth = "3";
  ctx.lineCap = "round";
  ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.clientX, e.clientY);
}


canvas.addEventListener("mousedown", startPainting)
canvas.addEventListener("mouseup", stopPainting)
canvas.addEventListener("mousemove", draw)