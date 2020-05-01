function drawLine(color, startX, startY, lastX, lastY, canvas) {
  canvas.beginPath();
  canvas.strokeStyle = color;
  canvas.moveTo(startX, startY);
  canvas.lineTo(lastX, lastY);
  canvas.stroke();
  canvas.closePath();
}

export default drawLine;
