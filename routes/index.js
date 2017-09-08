var express = require('express');
var router = express.Router();


NB_MAX_LINES = 8;
NB_MAX_ROWS  = 8;
board = [];


// Initialize values
for(var i = 0; i < NB_MAX_LINES; i++) {
  board[i] = []
  for(var j = 0; j < NB_MAX_ROWS; j++) {
    board[i].push('');
  }
}

board[1][2] = 'black';
board[3][4] = 'white';


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',
      {
          title: 'Othello',
          NB_MAX_LINES: NB_MAX_LINES,
          NB_MAX_ROWS: NB_MAX_ROWS,
          board: board
      }
      );
});




module.exports = router;
