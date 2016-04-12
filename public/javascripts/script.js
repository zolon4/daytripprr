$(function(){
  $('#search').on('click', function(){
    $.ajax({
      method: "POST",
      url: "/distance",
      data: {destination: $('#destination').val()}
    }).done(function(response){
     $('#result').append('<div class="card"><div class="card-block"><div class="row"><div class="col-sm-3"><img src="http://image005.flaticon.com/28/svg/33/33409.svg" class="img-fluid"/></div><div class="col-sm-9"><h4>'+ response.destination +'</h4><p>' + response.duration +'</p></div></div></div></div>')
    });
  });

  var map = '<img id="theImg" src="http://images.clipartpanda.com/sun-transparent-background-sun_strong_bold_T.png" />'

  var delayImage = function(image) {
    setTimeout(function(){
    $('#map').append(map)
    },4800)
   }

  var getDistance = function(){
      var destination = $('#destination').val();
      console.log(destination);
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
