

const canvas = document.getElementById("draw-canvas");//creating canvas.
const ctx = canvas.getContext("2d");

canvas.style.background = "linear-gradient(to bottom right, blue 14%, black 60%)"; // setting the background color
canvas.width = window.innerWidth; //setting the height and  width of the canvas to fill the browser.
canvas.height = window.innerHeight;

// creating function to resize the canvas when fullscreen.
window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// creating random stars
const stars = [];
const numOfStars = 500;

// making stars have random positions and brightness.
// with a for loop.
for (let i = 0; i < numOfStars; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    brightness: Math.random() * 200 + 30,
    flickerSpeed: Math.random() * 2 + 0.5,
  })
};

// drawing stars on the canvas
// using a function
function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let star of stars) {
    ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness / 255})`;
    ctx.beginPath();
    ctx.arc(star.x, star.y, 1.5, 0, Math.PI * 2);
    ctx.fill();
  }
};

// creating animation for twinkling stars
function animateStars() {
  for (let star of stars) {
    star.brightness += star.flickerSpeed;
    if (star.brightness > 255 || star.brightness < 100) {
      star.flickerSpeed *= -1;
    }
  }
  drawStars()
  requestAnimationFrame(animateStars);
};

animateStars();