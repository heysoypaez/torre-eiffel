import drawPerClick from "./drawPerClick.js";
import { button } from "./button.js";
import { canvas } from "./canvas.js";
import drawMarkup from "./drawMarkup.js";
import "../css/index.css";


drawMarkup("#faa", canvas);
button.addEventListener("click", drawPerClick);
