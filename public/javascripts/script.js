$(function(){
var map = '<img id="theImg" src="http://www.aperfectworld.org/clipart/seasons/sun.png" />'

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
  delayImage(map)



})
