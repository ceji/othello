var express = require('express');
var boardService = require('../services/boardService');

var router = express.Router();


router.get('/:coordi/:coordj', function(req, res, next) {
    req.session.board = boardService.click(req.session.board, coordi, coordj, 1);
    res.send('Birds home page'); 
});

module.exports = router;
