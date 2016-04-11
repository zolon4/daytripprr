var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');
var Trip = require('../models/trip');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*GET login page. */
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

/*GET signup page. */
router.get('/signup', function(req, res, next){
  res.render('signup', { message: req.flash('signupMessage') });
})

// process the signup form
router.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/', // redirect to the secure profile section
    failureRedirect : '/users/signup', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }));

// LOGOUT
router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

/*GET user settings page. */
router.get('/settings', function(req, res, next){
  var user = User.findOne({}, 'name email currentcity currentstate', function(err, user){
    console.log(user);
   res.render('settings', {user: req.user});
  })
});

router.put('/settings', function(req, res, next){
  var user = User.findOne({},'username email currentcity');


  db.users.findOneAndUpdate(
     { id: req.user._id },
     { $set },
     {username: req.body.username,
      email: req.body.email,
      currentcity: req.body.currentcity,
      currentstate: req.body.currentstate
      }
  );

  res.redirect('/profile');
})

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();
  // if they aren't redirect them to the home page
  res.redirect('/');
};




module.exports = router;
