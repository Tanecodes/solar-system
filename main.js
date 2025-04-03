

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

let ringAngle = 0;

// function to draw saturn
function drawSaturn() {
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 250;

  // creating a glow gradient for saturn
  const glowRadius = radius * 1.06;
  const glowGradient = ctx.createRadialGradient(centerX, centerY, radius, centerX, centerY, glowRadius);
  glowGradient.addColorStop(0, "rgba(244, 197, 66, 0.5)");
  glowGradient.addColorStop(1, "rgba(0, 0, 0, 0)");

  // drawing glow around saturn
  ctx.fillStyle = glowGradient;
  ctx.beginPath();
  ctx.arc(centerX, centerY, glowRadius, 0, Math.PI * 2);
  ctx.fill();

  // drawing rings for saturn
  ctx.save();
  ctx.translate(centerX, centerY);
  ctx.rotate(ringAngle);
  ctx.beginPath();
  ctx.ellipse(0, 0, radius * 1.5, radius * 0.5, 0, 0, Math.PI * 2);
  ctx.strokeStyle = "rgba(200, 180, 150, 0.6)";
  ctx.lineWidth = 10;
  ctx.stroke();
  ctx.closePath();
  ctx.restore();

  // creating color for saturn
  const gradient = ctx.createRadialGradient(centerX - 30, centerY - 30, 20, centerX, centerY, radius);
  gradient.addColorStop(0, "#f4c542");
  gradient.addColorStop(0.5, "#d99e30");
  gradient.addColorStop(1, "#a36d20");

  // drawing satrun on the canvas
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.fill();
};

  // creating animation for twinkling stars
  function animateStars() {
    for (let star of stars) {
      star.brightness += star.flickerSpeed;
      if (star.brightness > 255 || star.brightness < 100) {
        star.flickerSpeed *= -1;
      }
    }
    ringAngle += 0.005;
    drawStars();
    drawSaturn();
    requestAnimationFrame(animateStars);
  };

animateStars();
