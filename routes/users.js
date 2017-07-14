var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');
var Trip = require('../models/trip');


function authenticatedUser(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    req.flash('errorMessage', 'Login to access!');
    return res.redirect('/users/login');
  }
}

function unAuthenticatedUser(req, res, next) {
  if (!req.isAuthenticated()) {
      return next();
  } else {
    req.flash('errorMessage', 'You are already logged in!');
    return res.redirect('/');
  }
}

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/login', function(req, res, next){
  res.render('login', { message: req.flash('loginMessage') });
});

router.post('/login', function(req, res, next){
  var loginStrategy = passport.authenticate('local-login', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true
  })
  return loginStrategy(req, res);
})

router.get('/signup', function(req, res, next){
  res.render('signup', { message: req.flash('signupMessage') });
})

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect : '/search',
  failureRedirect : '/users/signup',
  failureFlash : true
}));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

router.get('/settings', authenticatedUser, function(req, res, next){
  var user = User.findOne({}, 'username email currentcity currentstate', function(err, user){
    res.render('settings', {user: req.user});
  })
});

router.put('/settings', function(req, res, next){
  User.findOneAndUpdate({ _id: req.user._id }, { 'local.username': req.body.username, 'local.email': req.body.email, 'local.currentcity': req.body.currentcity, 'local.currentstate': req.body.currentstate }, function(err, user) {
    if (err) console.log(err);
    res.redirect('/profile');
  });
});


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/');
};

module.exports = router;
