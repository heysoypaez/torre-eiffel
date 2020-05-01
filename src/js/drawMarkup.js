import drawLine from "./drawLine.js";

function drawMarkup(color, canvas) {
  drawLine(color, 1, 1, 1, 299, canvas);
  drawLine(color, 299, 299, 1, 299, canvas);
  drawLine(color, 1, 1, 299, 1, canvas);
  drawLine(color, 299, 299, 299, 1, canvas);
}

export default drawMarkup;
