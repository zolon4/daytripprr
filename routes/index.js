var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Trip = require('../models/trip');
var user = new User();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'});
});

router.get('/profile', function(req,res,next){
 var user = User.find({},'name email currentcity',function(err,user){
       if (err)
       console.log('error occured in the database');
       console.log(user)
       res.render('profile', {user: user})
   });
})


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
