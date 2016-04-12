$(function(){
var map = '<img id="theImg" src="http://images.clipartpanda.com/sun-transparent-background-sun_strong_bold_T.png" />'

 var delayImage = function(image) {
  setTimeout(function(){
   $('#map').append(map)
  },4800)
 }




 $('#bottom').click(function () {
          $('html, body').animate({
              scrollTop: $(document).height()
          },
          1500);
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
  delayImage(map)


})
