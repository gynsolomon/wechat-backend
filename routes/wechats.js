var express = require('express');
var router = express.Router();
var wechat = require('wechat');

/* GET wechat api test. */
router.get('/', wechat('solomon',function(req, res){
    var message = req.weixin;
    res.reply('welcome: ', message.FromUserName);
}));

module.exports = router;
