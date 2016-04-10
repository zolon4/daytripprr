var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Trip = require('../models/trip')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/*GET saved trips page. */
router.get('/saved', function(req, res, next){
  res.render('saved');
});

/*GET trip search page. */
router.get('/search', function(req, res, next){
  res.render('search');
});

/*GET login page. */
router.get('/login', function(req, res, next){
  res.render('login');
});

/*GET signup page. */
router.get('/signup', function(req, res, next){
  res.render('signup');
})

/*GET trip show page. */
router.get('/:id', function(req, res, next){
  res.render('trip_show');
});

module.exports = router;
