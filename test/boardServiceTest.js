var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var boardService = require('./../services/boardService');

describe('boardService', function() {
  it('returns a board with a click', function() {
  	var bs = new boardService;
  	
  	board = bs.getEmptyBoard();
    
    x = 1;
    y = 1;
    value = 1;
    newBoard = bs.click(board, x, y, value);

    expect(newBoard[x][y]).to.equal(value);
  });
});