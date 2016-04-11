var express = require('express');
var router = express.Router();
var passport = require('passport');


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

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();
  // if they aren't redirect them to the home page
  res.redirect('/');
};




module.exports = router;
