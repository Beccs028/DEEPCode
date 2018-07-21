var current_player = "X";
var second_player = "0";

// creating array
var board =
[
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
];

function drawBoard(board) {
  // the easiest way
  console.log("|"+board[0]+"|"+board[1]+"|"+board[2]+"|");
  console.log("|"+board[3]+"|"+board[4]+"|"+board[5]+"|");
  console.log("|"+board[6]+"|"+board[7]+"|"+board[8]+"|");
}

function availableSpace() {
  // return type is boolean
  for (var i=0; i<board.length; i++) {
    if (board[i] == " ") {
      return true;
    }
  }
  return false;
}

function dealWithInput() {
  var success = false;
  while (!success) {
    var user_input = parseInt(prompt ("tell me where go"));
    if (board[user_input] == " ") {
        board[user_input] = current_player;
        success = true;
    } else {
      alert("your move was invalid");
    }
  }
}

// using fucntions

drawBoard(board);

while (availableSpace()) {
    dealWithInput();
    drawBoard(board);
}
