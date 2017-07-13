var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });


  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });


  passport.use('local-signup', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
  }, function(req, email, password, done) {
    process.nextTick(function() {
      User.findOne({ 'local.email' :  email }, function(err, user) {
        if (err)
        return done(err);

        if (user) {
          return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
        } else {

          var newUser = new User();
          newUser.local.email = email;
          newUser.local.password = password;
          newUser.local.username = req.body.username;
          newUser.local.currentcity = req.body.currentcity;
          newUser.local.currentstate = req.body.currentstate;

          // set the user's local credentials
          newUser.local.email = email;
          newUser.local.password = newUser.generateHash(password);

          // save the user
          newUser.save(function(err) {
            if (err)
            throw err;
            return done(null, newUser);
          });
        }
        });
      });
  }));


   passport.use('local-login', new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
  }, function(req, email, password, done) {

    User.findOne({ 'local.email': email }, function(err, user) {
      if (err) return done(err);
      if (!user.validPassword(password)) return done(null, false, req.flash('errorMessage', 'Oops wrong password!'));
      return done(null, user);
    });
  }));

};
