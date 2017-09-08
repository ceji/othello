var express = require('express');
var router = express.Router();


router.get('/:coordi/:coordj', function(req, res, next) {
    res.send('Birds home page');
});

module.exports = router;
