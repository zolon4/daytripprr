var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/*GET saved trips page. */
router.get('/saved', function(req, res, next){
  res.render('saved_trips');
});

/*GET trip search page. */
router.get('/search', function(req, res, next){
  res.render('search');
});

/*GET trip show page. */
router.get('/:id', function(req, res, next){
  res.render('trip_show');
});

module.exports = router;
