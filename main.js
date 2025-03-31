document.documentElement.style.margin = "0"; //setting margin and padding on all elements in the dom.
document.documentElement.style.padding = "0";

const canvas = document.getElementById("draw-canvas");//creating canvas.
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth; //setting the height and  width of the canvas to fill the browser.
canvas.height = window.innerHeight;

canvas.style.background = "linear-gradient(to bottom right, blue 14%, lightblue 28%, black 60%)"; // setting the background color