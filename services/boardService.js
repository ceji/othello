// Service managing the board

class BoardService {

	constructor(height, width) {
	}	

	// Returns an empty board of 8/8 filled of 0
	getEmptyBoard() {
		  	var board = Array.apply(null, {length: 8}).map(Number.call, Number);
  			for (var i = 0; i < 8; i++) {
  				board[i] = Array.apply(null, {length: 8}).fill(0);
  			}
  			return board;
	}

	// A click has been done on the board. We update the board and return the value
	click(board, x, y, value) {
		if (board[x] == undefined) {
			throw "Uncorrect board size";
		}

		if (board[x][y] == undefined) {
			throw "Uncorrect board size";
		}

		if (board[x][y] != 0) {

			console.log(board[x][y]);
			throw "Board has already the value of " + board[x][y];
		}


		board[x][y] = value;

		return board;
	}

}

module.exports = BoardService;
