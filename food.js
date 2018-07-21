function Food(xVal, yVal) {
  this.x;
  this.y;

  this.pickLocation = function() {
    var col = floor(width/blockSize);
    var row = floor(height/blockSize);

    this.x = floor(random(col)) * blockSize;
    this.y = floor(random(row)) * blockSize;
  }

  this.show = function() {
    fill("#c40000")
    rect(this.x, this.y, blockSize, blockSize);

  }
}
