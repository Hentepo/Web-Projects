// Get the canvas element and its context
const canvas = document.getElementById("pong");
const ctx = canvas.getContext("2d");
// Get the start button element
const startButton = document.getElementById("start-button");

let scoreLeft = 0;

let scoreRight = 0;

let count = 0;

document.getElementById("number1").textContent = scoreLeft;

document.getElementById("number2").textContent = scoreRight;

let ball = {
    x: 400,       // Ball's x position (centered horizontally on the canvas)
    y: 200,       // Ball's y position (centered vertically on the canvas)
    radius: 10,   // Ball's radius (size)
    dx: 2,        // Ball's horizontal speed (movement per frame)
    dy: 2         // Ball's vertical speed (movement per frame)
  };

// Define the paddles (for simplicity, let's say they're centered vertically)
let paddleWidth = 10, paddleHeight = 100;

let leftPaddle = {
  x: 0, y: canvas.height / 2 - paddleHeight / 2, // Left paddle
  width: paddleWidth, height: paddleHeight,
  dx: 12,
  dy: 12
};
let rightPaddle = {
  x: canvas.width - paddleWidth, y: canvas.height / 2 - paddleHeight / 2, // Right paddle
  width: paddleWidth, height: paddleHeight,
  dx: 12,
  dy: 12
};

function drawPaddles() {
  ctx.fillStyle = "#00ffff"; // Neon cyan color for paddles
  ctx.shadowBlur = 20; // Adding a glow effect
  ctx.shadowColor = "#00ffff";  // Glow color
  
  ctx.fillRect(leftPaddle.x, leftPaddle.y, leftPaddle.width, leftPaddle.height);
  ctx.fillRect(rightPaddle.x, rightPaddle.y, rightPaddle.width, rightPaddle.height);
  ctx.shadowBlur = 0;  // Reset shadow effect after paddles are drawn
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2); // Draw a circle
  ctx.fillStyle = "#ff00ff";  // Neon pink color for the ball
  ctx.shadowBlur = 15; // Adding a glow effect
  ctx.shadowColor = "#ff00ff";  // Glow color
  ctx.fill();              // Fill the ball with color
  ctx.closePath();
}

function resetBall() {
  ball.x = 400;       // Ball's x position (centered horizontally on the canvas)
  ball.y = 200;      // Ball's y position (centered vertically on the canvas)
  ball.dx = 2,        // Ball's horizontal speed (movement per frame)
  ball.dy = 2         // Ball's vertical speed (movement per frame)
}

  function updateBallPosition() {
    ball.x += ball.dx;  // Move the ball horizontally
    ball.y += ball.dy;  // Move the ball vertically

    if (ball.y - ball.radius <= 0 || ball.y + ball.radius >= canvas.height) {
      ball.dy = -ball.dy;  // Reverse the vertical direction if it hits top or bottom
    }

  // Ball collision with left or right walls
  if (ball.x - ball.radius <= 0 || ball.x + ball.radius >= canvas.width) {
    ball.dx = -ball.dx;  // Reverse the horizontal direction if it hits left or right wall
  }    

  // Ball collision with left paddle
  if (ball.x - ball.radius <= leftPaddle.x + leftPaddle.width &&  // Ball is near the left paddle
    ball.y >= leftPaddle.y &&  // Ball is within the vertical range of the paddle
    ball.y <= leftPaddle.y + leftPaddle.height) {
  ball.dx = -ball.dx;  // Reverse horizontal direction
}
  // Ball collision with right paddle
  if (ball.x + ball.radius >= rightPaddle.x &&  // Ball is near the right paddle
    ball.y >= rightPaddle.y &&  // Ball is within the vertical range of the paddle
    ball.y <= rightPaddle.y + rightPaddle.height) {
  ball.dx = -ball.dx;  // Reverse horizontal direction
}

}
  function updateScore() {
    if (ball.x - ball.radius <= 0) {  // If ball touches the left wall
        scoreRight += 1; // Right player scores
        resetBall();
    } else if (ball.x + ball.radius >= canvas.width) { // If ball touches the right wall
        scoreLeft += 1; // Left player scores
        resetBall();
    }

    // Update the score display in the HTML
    document.getElementById("number1").textContent = scoreLeft;
    document.getElementById("number2").textContent = scoreRight;
}

  document.addEventListener("keydown", function (e) {
    if (e.key === "w") {  // Move up (W or ArrowUp)
        leftPaddle.y -= leftPaddle.dy;
    }
    if (e.key === "s") {  // Move down (S or ArrowDown)
        leftPaddle.y += leftPaddle.dy;
    }
    if (e.key === "ArrowUp") {  // Move up (W or ArrowUp)
        rightPaddle.y -= rightPaddle.dy;
    }
    if (e.key === "ArrowDown") {  // Move down (S or ArrowDown)
        rightPaddle.y += rightPaddle.dy;
    }
    });

// Draw the game
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clear the canvas
    drawBall();  // Draw the ball
    drawPaddles();
    updateBallPosition();  // Update the ball's position
    requestAnimationFrame(draw);  // Keep the animation going
    updateScore();
  }
  
// Function to start the game loop
function startGame() {
  draw();  // Start the game loop
}

// Add event listener to start the game when the button is clicked
startButton.addEventListener("click", function() {
  startButton.style.display = "none";  // Hides the button
  startGame();  // Call the function to start the game
});