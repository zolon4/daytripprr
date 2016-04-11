var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*GET login page. */
router.get('/login', function(req, res, next){
  res.render('login');
});

/*GET signup page. */
router.get('/signup', function(req, res, next){
  res.render('signup');
});

/*POST signup page. */
router.post('/signup', function(req, res, next){
  var signupStrategy = passport.authenticate('local-signup', {
    successRedirect: "/index/saved",
    failureRedirect: "/users/signup"
  });
  return signupStrategy(req, res);
});

module.exports = router;
