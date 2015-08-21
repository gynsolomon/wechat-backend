var express = require('express');
var router = express.Router();
var wechat = require('wechat');

/* GET wechat api test. */
router.get('/', wechat('solomon',function(req, res){
    res.sendStatus(200);
}));

module.exports = router;
