var LocalStrategy = require('passport-local').Strategy;
var User          = require('../models/user');

module.exports = function(passport) {

  // passport.serializeUser(function(user, done) {
  //   done(null, user.id);
  // });

  // passport.deserializeUser(function(id, done) {
  //   User.findById(id, function(err, user) {
  //     // If a user is found it will be assigned to req.user
  //     done(err, user);
  //   })
  // })

  passport.use('local-signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true,
  }, function(req, username, email, currentcity, currentstate, password, done) {

    // Find a user with this email
    User.findOne({ 'local.email' : email, 'local.username' : username }, function(err, user) {
      if (err) return done(err);

      // If there is a user with this email or username
      if (user) {
        return done(null, false, req.flash('errorMessage', 'This email is already used!'));
      }
      else {

        var newUser = new User();
        newUser.local.username = username;
        newUser.local.email = email;
        newUser.local.currentcity = currentcity;
        newUser.local.currentstate = currentstate;
        newUser.local.password = password;

        newUser.save(function(err, user) {
          if (err) return done(err);
          return done(null, user);
        });
      }
    });
  }));

  passport.use('local-login', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  }, function(req, username, password, done) {

    // Search for a use with this email
    User.findOne({ 'local.username': username }, function(err, user) {
      if (err) return done(err);

      // If no user is found
      if (!user) return done(null, false, req.flash('errorMessage', 'No user found.'));

      // Check if the password is correct
      if (!user.validPassword(password)) return done(null, false, req.flash('errorMessage', 'Oops wrong password!'));

      return done(null, user);
    });

  }));
}
