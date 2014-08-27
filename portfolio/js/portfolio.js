/* portfolio.js */
var prefix = ['-moz-','-webkit-','-o-','-ms-'];
var counter = 0;
var didOnce = false;
var stop_scrolling = false;
var stalk_clicked = false;
var pic_counter = 1;
var max_pic = 3;
var display_delay = 10000; //In milliseconds
var message = ['&nbsp' ,'insight + design','' ,'strategy + solution','','visual + code'];
var quote = [ 'Go and make interesting mistakes, make amazing mistakes, make glorious and fantastic mistakes. Break rules. Leave the world more interesting for your being here. - Neil Gaiman, Make Good Art',
              'Always double check to make sure you\'re not designing toward your own biases instead of what\'s best for your product and users. - Cap Watkins, Design Lead at Etsy',
              'Start where you are. Use what you have. Do what you can. - Arthur Ashe',
              'When you are building something revolutionary, you may look delusional to those around you. - Lauris Liberts, Draugiem Group',
              'Fire the committee. No great website in history has been conceived of by more than three people. - Seth Godin',
              'The biggest failure you can have in life is making the mistake of never trying at all.',
              'A startup without a full-time designer is like having a restaurant without a kitchen and ordering out for customers. -Kerem Suer',
              'Just put something out there. It will be imperfect. The real work is in figuring out how to make it better. - @jessicajackley',
              'A good designer finds an elegant way to put everything you need on a page. A great designer convinces you half that shit is unnecessary. -Mike Monteiro',
              'The most important thing is that you actually care, that you do something to the very best of your ability. -Jony Ive, Apple',
              'Do, or do not. There is no try. -Yoda',
              'Creative process: 1) This is going to be awesome 2) This is hard 3) This is terrible 4) I\'m terrible 5) Hey, not bad 6) That was awesome. Original tweet - http://twitter.com/boltcity/status/374918814002991104',
              'Good design is as little design as possible. Less, but better - because it concentrates on the essential aspects, and the products are not burdened with non-essentials. Back to purity, back to simplicity. - Dieter Rams',
              'Screw it, let\'s do it! - Richard Branson, Virgin',
              "Being the richest man in the cemetery doesn't matter to me. Going to bed at night saying we've done something wonderful, that's what matters to me. - Steve Jobs",
              'Opportunity lives at the intersection of what people need tomorrow and can be just barely built today. - Aaron Levie, Box.net',
              'Unexplored constraints are just excuses. Understand the problem and look to reframe your constraints - the outcome may surprise you. - Zeke Franco'];


var scrolled = 0;
var divHeight;

$(document).ready(function() {
  proxCursor('#stamplay');
  proxCursor('#centup');
  proxCursor('#fifthcapital');
  proxCursor('#tablesavvy');
  //$('#slider_desc').addClass('go');   
  //setInterval(function(){ changeDesc() }, display_delay);
  //setInterval(function(){ changePic()}, display_delay);  
  //console.log(document.body.scrollTop);
  /*Set initial height value of hero image at start */
  divHeight = $(window).height();
  $('#main_hero').css('height',divHeight);
  $('.container').css('height',divHeight);

/*================================================*/
/* Revealing Stalk Me links */
/*================================================*/
  $('#stalkme').click(function() {
    //console.log("Stalk clicked: " + stalk_clicked);
    if(stalk_clicked) {
      //console.log("I went inside stalk if.")
      $('.stalk_box').removeClass('pulse');
      $('.stalk_box').removeClass('animated');
      $('#stalk_container').css('visibility', 'hidden');      
      stalk_clicked = false;     
    } else {
      $('#stalk_container').css('visibility', 'visible');
      $('.stalk_box').addClass('pulse');
      $('.stalk_box').addClass('animated');
      stalk_clicked = true;
    }
  });

  $('#reach_out').click(function() {
    //console.log("Stalk clicked: " + stalk_clicked);
    if(stalk_clicked) {
      //console.log("I went inside stalk if.")
      $('.stalk_box').removeClass('pulse');
      $('.stalk_box').removeClass('animated');
      $('#stalk_container').css('visibility', 'hidden');      
      stalk_clicked = false;     
    } else {
      $('#stalk_container').css('visibility', 'visible');
      $('.stalk_box').addClass('pulse');
      $('.stalk_box').addClass('animated');
      stalk_clicked = true;
    }
  });  

  //console.log('Scroll beginning: ' + scrolled);
  $('#learn_btn').click(function() {
    scrolled = scrolled + 594;
    console.log('Scrolled: ' + scrolled);
    $('body').animate({
      scrollTop: scrolled 
    });
    scrolled = 0;
  });
/*================================================*/
/* Peek feature for Quotes :) */
/*================================================*/
  $(window).scroll(function(e){
  /* Quote Function */
    if(!didOnce) {
      counter = Math.round(Math.random() * quote.length);
      $('#quotebox p').html(quote[counter]);
      didOnce = true;
    }   
  /* Determine if window reached the bottom */
    scrolled = $('body').scrollTop();
    if(document.body.scrollTop == document.body.scrollHeight-window.innerHeight) {
      console.log('reached bottom');  
      $('body').delay(4000).animate({
        scrollTop: -scrolled        
      }); 
      scrolled = 0;       
    }
    /* Reset didOnce once window goes back to the top */
    if(document.body.scrollTop == 0) {
      didOnce = false;
    }        
  });
/*================================================*/
/*  Automatically resize height of main page */
/*================================================*/
  /* Set this to be the height of #main_hero */
  $(window).resize(function() {
    /* Determine height of window */
    divHeight = $(window).height();
    $('#main_hero').css('height',divHeight);
    $('.stars').css('height',divHeight);
    $('#about_hero').css('height',divHeight);
    $('#projects_hero').css('height',divHeight);     
  });

});
/*
function parallax(){
  var scrolled = $(window).scrollTop();
  $('#text_box').css('top',-((scrolled -10)*0.1)+'px');
}
*/

/*==================================================================================*/
/* Proximity Cursor - detects position of cursor and changes the div's css property */
/*==================================================================================*/
function proxCursor(div) {
  $(div).bind('proximity', {max:100}, function(e, proximity, distance){    
    $(div).css('background-size', (proximity * 100)+'%');
    if(proximity > 0.9) {
      $(div).css('filter', 'none');      
      for(var i = 0; i <= prefix.length; i++) {
        $(div).css(prefix[i] + 'filter', 'sepia(0%)');       
      }             
    } else {
      $(div).css('filter', 'sepia(100%)');
      for(var i = 0; i <= prefix.length; i++) {      
        $(div).css(prefix[i]+'filter', 'sepia(100%)');  
      }    
    }  
  });      
}

function changeDesc() {
  //console.log(message[counter]);
  $('#textbox_content h1').removeClass('fadeOut');  
  $('#textbox_content h1').addClass('fadeIn'); 
  $('#textbox_content h1').addClass('orange');  
  $('#textbox_content h1').addClass('animated');    
  $('#textbox_content h1').html(message[counter]);
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
  $('#textbox_content h1').removeClass('fadeIn');  
  $('#textbox_content h1').addClass('fadeOut');
}

function changePic() {
  $('#pic_container').css('background','url(../images/stam'+pic_counter+'.jpg) no-repeat center center scroll');
  pic_counter++;  
  if(pic_counter > max_pic) {
    pic_counter = 1;
  }
  //console.log('Change the pic!');
}