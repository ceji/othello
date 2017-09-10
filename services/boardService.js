// Service managing the board

var BoardService = class {

	// A click has been done on the board. We update the board and return the value
	click(board, x, y, value) {
		if (board[x] == undefined) {
			throw "Uncorrect board size";
		}

		if (board[x][y] == undefined) {
			throw "Uncorrect board size";
		}

		if (board[x][y] != 0) {
			throw "Board has already the value of " + board[x][y];
		}

		board[x][y] = value;

		return board;
	}

}