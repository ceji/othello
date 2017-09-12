var chai = require('chai');
var should = require('chai').should();
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

  it('Wrong click coordinates', function() {
  	var bs = new boardService;	
  	board = bs.getEmptyBoard();

	  (function () {
        	x = 100;
		y = 100;
		value = 1;
        	newBoard = bs.click(board, x, y, value);
	  }).should.throw('Uncorrect board size');
  });
});
