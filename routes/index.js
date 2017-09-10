var express = require('express');
var router = express.Router();


NB_MAX_LINES = 8;
NB_MAX_ROWS  = 8;





/* GET home page. */
router.get('/', function(req, res, next) {

  // First Time
  if (req.session.board == undefined) {
    req.session.board = [];

    // Initialize values
    for(var i = 0; i < NB_MAX_LINES; i++) {
      req.session.board[i] = []
      for(var j = 0; j < NB_MAX_ROWS; j++) {
        req.session.board[i].push('');
      }
    }
    req.session.board[1][2] = 'black';
    req.session.board[3][4] = 'white';
  }


  res.render('index',
      {
          title: 'Othello',
          NB_MAX_LINES: NB_MAX_LINES,
          NB_MAX_ROWS: NB_MAX_ROWS,
          board: req.session.board
      }
      );
});




module.exports = router;
