// event listeners for left and right arrow keys
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);
var canvas = document.getElementById("theBestCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height/2;
var radius = 10;
var xDir = 1;
var yDir = 1;
var paddleWidth = 80;
var paddleHeight = 20;
var paddleX = canvas.width/2;
var rightPressed = false;
var leftPressed = false;
var brickHeight = 20;
var brickWidth = 50;
var brickGapX = 10;
var brickGapY = 50;
var bricks = [];
var numRows = 3;
var numCols = 8;

function newLife() {
  x = canvas.width/2;
  y = canvas.height/2;
  paddleX = canvas.width/2 - paddleWidth/2;
  rightPressed = leftPressed = false;
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2*Math.PI);
  ctx.fillStyle = "	#000080";
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#2E86C1";
  ctx.fill();
  ctx.closePath();
}

function keyDownHandler(event) {
  if (event.keyCode == 39) {
    rightPressed = true;
  }
  if (event.keyCode == 37) {
    leftPressed = true;
  }
}

function keyUpHandler(event) {
  if (event.keyCode == 39) {
    rightPressed = false;
  }
  if (event.keyCode == 37) {
    leftPressed = false;
  }
}

function brick(x, y, width, height, outerColour, innerColour, status) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.outerColour = outerColour;
  this.innerColour = innerColour;
  this.status = status;

  this.draw = function() {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.innerColour;
    ctx.strokeStyle = this.outerColour;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }
}

function createBricks() {
  var brickX = 45;
  var brickY = 80;

  for (var col = 0; col < numCols; col ++) {
    bricks[col] = [];
    for (var row = 0; row < numRows; row++){
      bricks[col][row] = new brick(
        col * (brickWidth + brickGapX) + brickX,
        row * (brickHeight + brickGapY) + brickY,
        brickWidth,
        brickHeight,
        "#2E86C1",
        "#2E86C1",
        1
      );

    }
  }
}

function drawBricks() {
  for (var col = 0; col < numCols; col ++) {
    for (var row = 0; row < numRows; row++){
    if (bricks[col][row].status != 0) {
      bricks[col][row].draw();
        }
      }
    }
  }

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  drawBricks();

  y = y + yDir;
  x = x + xDir;
  // moving the ball and bouncing
  if ( y >= canvas.height) {
    newLife();
  } else if ( y + 30 >= canvas.height && x>= paddleX && x <= paddleX + paddleWidth){
    yDir = - yDir;
  } else if ( y - radius <= 0) {
    yDir = - yDir;
  }

  if ( x + radius >= canvas.width) {
    xDir = -xDir;
  } else if ( x - radius <= 0) {
    xDir = -xDir;
  }

  if (rightPressed == true  && paddleX + paddleWidth < canvas.width) {
    paddleX = paddleX + 3;
  } else if (leftPressed && paddleX > 0) {
    paddleX = paddleX - 3;
  }
}

// allows the ball to be animated
createBricks();
console.log(bricks);
var myGame = setInterval (render, 10);
