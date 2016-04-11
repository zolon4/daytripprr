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
router.get('/profile/user_settings', function(req, res, next){
  res.render('usersettings');
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
