import drawLine from "./drawLine.js";
import { canvas, canvasWidth } from "./canvas.js";
import { textBox, button } from "./button.js";

function drawPerClick() {
  const lines = parseInt(textBox.value);
  let firstY;
  let lastX;
  const color = "#faa";
  const space = canvasWidth / lines;

  for (let l = 0; l < lines; l++) {
    firstY = space * l;
    lastX = space * (l + 1);
    drawLine(color, 0, firstY, lastX, 300, canvas);
    console.log("linea " + 1);
  }

  for (let l = 0; l < lines; l++) {
    firstY = 10 * l;
    lastX = 10 * (l + 1);
    drawLine(color, firstY, 0, 300, lastX, canvas);
    console.log("line " + 1);
  }
}

export default drawPerClick;
