var express = require('express');
var boardService = require('../services/boardService');

var router = express.Router();


router.get('/:coordi/:coordj', function(req, res, next) {
    res.send('Birds home page'); 
});

module.exports = router;
