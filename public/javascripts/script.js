$(function(){
var map = '<img id="theImg" src="http://images.clipartpanda.com/sun-transparent-background-sun_strong_bold_T.png" />'

//Logged in search function
  $('#destination').keypress(function(e){
   if(e.which == 13) {
    $.ajax({
      method: "POST",
      url: "/distance",
      data: { destination: $('#destination').val() }
    }).done(function(response){
      var map = "id='youframe' frameborder='0' style='border:0' src='https://www.google.com/maps/embed/v1/directions?key=AIzaSyC-EwkbLF1DAAx4XVC7935uSXUEtiM68iM&origin=" + response.origin + "&destination=" + response.destination + "'";

      var saveTrip = '<form id="ABC" action="/search" method="post"><div class="form-group"><input type="hidden" name="destination" value="'+ response.destination +'"><input type="hidden" name="distance" value="'+response.distance+'"><input type="hidden"  name="duration" value="'+response.duration+'"><input type="hidden" class="form-control form-control-custom" name="origin" value="'+response.origin+'"><input type="hidden" class="form-control form-control-custom" name="map" value="'+ map +'"></div><button id="saveTrip" type="submit" class="btn btn-warning btn-block">Save</button></form> '

      $('#result').prepend('<div class="col-sm-4"><div class="card"><iframe ' + map + '></iframe><div class="card-block"><div class="row"><a target="_blank" href="https://www.google.com/maps/dir/'+response.origin+'/'+response.destination+'/"><h4>' + response.destination + '</h4></a><p>' + response.duration + '</p>' + saveTrip +'</a></div></div><</div>');

      $('#saveTrip').on('click', function(){
       {
          saveTrip: $('#ABC').val();
        }
      })
    });
   }

  });

//Logged out search function
  $('#out_search').on('click', function(){
    $.ajax({
      method: "POST",
      url: "/distance1",
      data: { origin: $('#origin').val(), destination: $('#destination').val() }
    }).done(function(response){
      var map = "id='youframe' frameborder='0' style='border:0' src='https://www.google.com/maps/embed/v1/directions?key=AIzaSyC-EwkbLF1DAAx4XVC7935uSXUEtiM68iM&origin=" + response.origin + "&destination=" + response.destination + "'";

       $('#result').prepend('<div class="card"><div class="card-block"><div class="row"><div class="col-sm-4"><iframe ' + map + '></iframe></div><div class="col-sm-8"><a target="_blank" href="https://www.google.com/maps/dir/'+response.origin+'/'+response.destination+'/"><h4>' + response.origin + ' to ' + response.destination + '</h4></a><p>' + response.duration + '</p></a></div></div></div></div>');
      })
    });

  var delayImage = function(image) {
    setTimeout(function(){
    $('#map').append(map)
    },4800)
   }

  $('#bottom').click(function () {
    $('html, body').animate({
      scrollTop: $(document).height()
    }, 1500);
      return false;
  });

  $("#logo2").typed({
    strings: ["lets take a trip ^1000", "daytripprr"],
    typeSpeed: 40,
    showCursor: false
  });

  $('#are').typed({
    strings: ["^4800 are we there yet?"],
    typeSpeed: 35,
    showCursor: false
    })
  delayImage(map);


})
