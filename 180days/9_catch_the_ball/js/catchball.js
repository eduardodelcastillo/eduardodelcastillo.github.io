/* Day 9: Catch the Ball */

var message = ['Nice job!','Good job!','Well done!','Great!',
               'You\'re good at this!','Very good!','Impressive!','Excellent!',
               'Wow! That\'s amazing!','Now, that\'s insanely good!','What? Are you even human?','You\'re a master! Congratulations!'];
var speed = 12;
var i = 0;
var level = 0;

$('document').ready(function() {

  $('#ball').click(function() {    
      $('#ball').css('visibility','hidden');
      var position_top = $(this).css('top');
      $('#message').html(message[i]);
      $('#message').css('top',position_top);
      $('#message').css('visibility','visible');
      setTimeout('newLevel()',2000);
      i++;
  });  

});

function newLevel() {
  console.log(i);
  level = i+1;
  if(level == 12){
    $('#message').html('Final Level!');
  } else if(level > 12) {
      $('button').css('visibility','visible');
      $('button').click(function() {
        location.reload();
      });
      return;
  } else {
    $('#message').html('Level '+level);
  }
  setTimeout('newSpeed()',1000);
}

function newSpeed() {
  speed--;
  $('#ball').css('animation-duration', speed+'s');
  var nspeed = $('#ball').css('animation-duration');
  console.log(nspeed);
  $('#ball').css('visibility','visible');
  $('#message').css('visibility','hidden');
}



/* Animation before CSS animation
  for(var i = 0; i <= ball_bounce; i++) {
    $('#ball').animate({top:'650px'},2000); 
    $('#ball').animate({width:'110px'},20);
    $('#ball').animate({width:'100px'},100);    
    $('#ball').animate({top:'0px'},2000);
  } 
  */


 /* Not related, this is for tableSAVVY
  var winner = new Array();
  for(i = 0; i < 5; i++) {
      winner[i] = Math.floor(Math.random()*57+1);
      console.log(winner[i]);
  } */
// Winners: 
// shaver81@gmail.com
// ldolins@yahoo.com 
// larbush@hotmail.com
// Elizabethanna99@gmail.com
// Ted_roumanis@yahoo.com