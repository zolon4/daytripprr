$(function(){

var map = '<img id="theImg" src="http://images.clipartpanda.com/sun-transparent-background-sun_strong_bold_T.png" />'

  $('#search').on('click', function(){
    console.log('test 1');
    $.ajax({
      method: "POST",
      url: "/distance",
      data: { destination: $('#destination').val() }
    }).done(function(response){
      console.log('test 2');
        var map = 'id="youframe" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyC-EwkbLF1DAAx4XVC7935uSXUEtiM68iM&origin=' + response.origin + '&destination=' + response.destination + '"';

      var saveTrip = '<form id="ABC" action="/search" method="post"><div class="form-group"><input type="hidden" name="destination" value="'+ response.destination +'"><input type="hidden" name="distance" value="'+response.distance+'"><input type="hidden"  name="duration" value="'+response.duration+'"><input type="hidden" class="form-control form-control-custom" name="origin" value="'+response.origin+'"><input type="hidden" class="form-control form-control-custom" name="map" value="'+ map +'"></div><button id="saveTrip" type="submit" class="btn btn-warning btn-block">Save</button></form> '
      console.log(saveTrip);


      console.log(map);

       $('#result').prepend('<div class="card"><div class="card-block"><div class="row"><div class="col-sm-3"><img src="http://image005.flaticon.com/28/svg/33/33409.svg" class="img-fluid"/></div><div class="col-sm-9"><a target="_blank" href="https://www.google.com/maps/dir/'+response.origin+'/'+response.destination+'/"><h4>' + response.destination + '</h4><p>' + response.duration + '</p><br><iframe ' + map + '></iframe>' + saveTrip +'</a></div></div></div></div>');
       debugger;


        $('#saveTrip').on('click', function(){
         {
            saveTrip: $('#ABC').val();
          }
          console.log('trip saved!');
      })
    });

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
