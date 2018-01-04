//var timer = '';
//$('.btnStart').on('click', function(){
//        timer.start();
//    });

//$('.btnEnd').on('click', function(){
//        timer.end();
//})
//$('.btnReset').on('click', function(){
//        timer.reset();
//})
//timer.addEventListener('secondsUpdated', function (e) {
//    $('#chronoExample .values').html(timer.getTimeValues().toString());
//});
//timer.addEventListener('start', function (e) {
//    $('#chronoExample .values').html(timer.getTimeValues().toString());
//});
//timer.addEventListener('reset', function (e) {
//    $('#chronoExample .values').html(timer.getTimeValues().toString());
//});

//--==================================================
// Set the date we're counting down to
var countDownDate = new Date("Sep 5, 2018 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = days + " " + hours + " "
  + minutes + " " + seconds + " ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Recommencer";
  }
}, 1000);  

//--=============================================================
 