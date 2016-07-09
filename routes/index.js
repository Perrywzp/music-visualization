var express = require('express');
var router = express.Router();
var path = require("path");
var fs=require("fs");
var media = path.join(__dirname,"../public/media");

/* GET home page. */

router.get('/', function(req, res) {
  fs.readdir(media,function(err,names){
    if(err){
      console.log(err);
    }else{
      res.render('index', { title: '幕枫音乐', music: names });
    }
  });
});

module.exports = router;
