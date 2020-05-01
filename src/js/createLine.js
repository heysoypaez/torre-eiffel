function createLine(canvas) {
  canvas.beginPath();
  canvas.strokeStyle = "white";
  canvas.moveTo(20, 10);
  canvas.lineTo(2500, 100);
  canvas.stroke();
  canvas.closePath();
}

export default createLine;
