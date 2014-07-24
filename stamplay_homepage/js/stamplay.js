/* stamplay.js */
var counter = 1;
var display_delay = 6000; //In milliseconds
var message = ['Skip the code.<br> Connect the backend magic to frontend design.', 'We give designers the ability to use APIs <br> without having to know how to code backend.',
                'Designers can prototype web applications in minutes <br> to show to clients, gather feedback and iterate at a faster pace.',
                'We let developers build web applications <br> saving up to <b>90%</b> of the cost and time of backend development.'];

$(document).ready(function() {
  $('#slider_desc').addClass('go');    
  setInterval(function(){ changeDesc() }, display_delay);  
});

function changeDesc() {
  //console.log(message[counter]);
  $('#slider_desc').addClass('go'); 
  $('#slider_desc').html(message[counter]);
  setTimeout('classGoOff()',display_delay/1.1);    
  counter++;   
  if(counter == message.length) {
    counter = 0;
  }  
}

function classGoOn() {
  //console.log('It is on!');
  $('#slider_desc').addClass('go');
}

function classGoOff() {
  //console.log('It is off!');
  $('#slider_desc').removeClass('go');
}