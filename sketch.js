var sillySnake;
var blockSize = 20;
var food;

function setup() {
  createCanvas(600, 600);
  frameRate(7);

  sillySnake = new Snake();
  food = new Food();
  food.pickLocation();
}


function draw() {
  background("#cefff9");
  sillySnake.update();
  sillySnake.show();
  food.show();
  sillySnake.eatFood();
}

function keyPressed() {
  if (keyCode == DOWN_ARROW) {
    sillySnake.movement(0,1);
  } else if (keyCode == LEFT_ARROW) {
    sillySnake.movement(-1,0);
  } else if (keyCode == UP_ARROW) {
    sillySnake.movement(0,-1);
  } else if (keyCode == RIGHT_ARROW) {
    sillySnake.movement(1,0);
  }
}
