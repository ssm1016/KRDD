var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET home page. */
router.get('/greeting', function(req, res, next) {
  res.render('about/greeting');
});

router.get('/browse', function(req, res, next){
  res.render('browse/browse');
});

module.exports = router;
