var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Trip = require('../models/trip');
var trip = new Trip();
var user = new User();
var distance = require('google-distance');

function authenticatedUser(req, res, next) {
  // If the user is authenticated, then we can continue with next
  // https://github.com/jaredhanson/passport/blob/a892b9dc54dce34b7170ad5d73d8ccfba87f4fcf/lib/passport/http/request.js#L74
  if (req.isAuthenticated()) return next();

  // Otherwise
  req.flash('errorMessage', 'Login to access!');
  return res.redirect('/users/login');
}

function unAuthenticatedUser(req, res, next) {
  if (!req.isAuthenticated()) return next();

  // Otherwise
  req.flash('errorMessage', 'You are already logged in!');
  return res.redirect('/');
}

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('about', { title: 'Express'});
});

/* GET profile page */
router.get('/profile', authenticatedUser, function(req,res,next){
  var trips = Trip.find({userId: req.user._id}, '', function(err,trip){
   if(err) console.log(err)
   res.render('profile', {user: req.user, trips: trip.reverse()});
 })
})

router.post('/profile', function(req, res, next){
  console.log(data);
})




/* GET search page. */
router.get('/search', function(req, res, next){
  if (req.isAuthenticated()){
    var id = req.user.id;
    return (res.render('search',{id: id}));
 } else
    res.render('search_loggedout');
});

/* POST perform logged in searches */
router.post('/distance', function(req, res){
  var currentcity = req.user.local.currentcity;
  var currentstate = req.user.local.currentstate;
  var origin = currentcity + ", " + currentstate;

  distance.get(
  {
    origin: origin,
    destination: req.body.destination
  },
  function(err, data) {
    if (err) return console.log(err);
    res.json(data);
  });
});

/*POST perform logged out searches */
router.post('/distance1', function(req, res){
 distance.get(
  {
    origin: req.body.origin,
    destination: req.body.destination
  },
  function(err, data) {
    if (err) return console.log(err);
    res.json(data);
  });
});

/*POST save searches. */
router.post('/search', function(req, res, next){
  var userid = req.user.id;
      var trip = Trip({
        destination: req.body.destination,
        origin: req.body.origin,
        distance: req.body.distance,
        duration: req.body.duration,
        userId: userid,
        map: req.body.map
      })
        trip.save(function(err) {
            if (err) console.log(err);
            res.redirect('/profile');
        });

})

router.post('/:id/complete', function(req, res, next) {
  Trip.findByIdAndUpdate(req.params.id, { completed: true }, function(err, trip) {
    if (err) console.log(err);
    res.redirect('/profile')
  });
});

router.post('/:id/delete/', function(req, res, next) {
  Trip.findByIdAndRemove(req.params.id, function(err) {
    if (err) console.log(err);
    res.redirect('/profile')
  });
});

/*GET trip show page. */
router.get('/:id', authenticatedUser, function(req, res, next){
  res.render('trip_show');
});


module.exports = router;
