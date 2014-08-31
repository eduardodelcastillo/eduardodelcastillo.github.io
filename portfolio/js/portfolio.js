/* portfolio.js */
var prefix = ['-moz-','-webkit-','-o-','-ms-'];
var counter = 0;
var index = 0;
var button_history = [];
var didOnce = false;
var stop_scrolling = false;
var stalk_clicked = false;
var pic_counter = 1;
var max_pic = 3;
var display_delay = 10000; //In milliseconds
var message = ['&nbsp' ,'insight + design','' ,'strategy + solution','','visual + code'];
var quote = [ 'You\'re awesome!',
              'Go and make interesting mistakes, make amazing mistakes, make glorious and fantastic mistakes. Break rules. Leave the world more interesting for your being here. - Neil Gaiman, Make Good Art',
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

var tablesavvy_desc = "A thorough UX research was carried out for TableSavvy's website. 1) Client interview and site visit to know more about the company and their objectives. 2) User research through surveys and contextual inquiries. 3) Analysis and synthesis - creating personas, user flows, etc to gain proper understanding of the data gathered. 4) Requirements and modelling that would guide our design. 5) Wireframing and using Illustrator to visualise the design. <br /> <br /> About: TableSavvy is a booking website catering to high end restaurants of Chicago that gives users 30% off their meal. <br /> <br />Website: www.tablesavvy.com";
var centup_desc = "CentUp is a social donation platform that lets you reward content builders on the web while at the same time giving something to charities. CentUp needs a mobile app reader where users can easily read articles and donate to the author. My role in this project is research of existing readers out there (eg Digg, Feedly, etc) and proposing the micro-interactions of the reader app. <br /> <br /> Website: www.centup.org";
var fifthcapital_desc = "Fifth Capital is a wealth management company based in Austin, Texas. Their current website needs a thorough overhaul since it is still using old technologies (eg Flash). With a team of four and after a thorough UX research was done, I was mainly responsible on the visual direction of the website and coding the site in html and css. <br /> <br />Website: www.5thcapital.com <br /> <br /> <a href='http://eduardodelcastillo.github.io/fifth_capital/index.html' target='_blank' class='projectlink'>SEE IT IN ACTION</a>";
var stamplay_desc = "A team of 7 worked on Stamplay's front page in order to develop the story-stelling of what the company does. My main role is executing the prototype by coding the front page in html, css and jquery. <br /> <br /> About Stamplay: Stamplay is a webapp that allows people to add back-end functions on their websites without coding by simply integrating one of their built in apis. <br /> <br />Website: www.stamplay.com <br /> <br /><a href='http://eduardodelcastillo.github.io/stamplay/index.html' target='_blank' class='projectlink'>SEE IT IN ACTION</a>";
var twincest_desc = "How does one capture and present the essence of a music band? I did this by listening to all of Twincest's music on soundcloud and youtube in order to capture the spirit and style of the music. I then proposed the colour mood and built the website that I think best portray their personality. <br /> <br /> <a href='http://eduardodelcastillo.github.io/twincest/index.html' target='_blank' class='projectlink'>SEE IT IN ACTION</a>";

$(document).ready(function() {
  //$('#slider_desc').addClass('go');   
  //setInterval(function(){ changeDesc() }, display_delay);
  //setInterval(function(){ changePic()}, display_delay);  
  //console.log(document.body.scrollTop);
  /*Set initial height value of hero image at start */
  divHeight = $(window).height();
  $('#main_hero').css('height',divHeight);
  $('.container').css('height',divHeight);

  //When page loads, load tablesavvy project contents first
  $('#tablesavvy').animate({'bottom': "-=10px"});  
  $('#tablesavvy').addClass('projhover');
  $('#tablesavvy li').addClass('projtexthover');  
  loadProjectContents('tablesavvy');

  // Rename Fifth Capital button when width goes 69px
  console.log($('#fifthcapital').width());
  if($('#fifthcapital').width() < 80) {
    $('#fifthcapital li').html('<br />5th Capital');
  } else {
    $('#fifthcapital li').html('<br />Fifth Capital');    
  }

/*================================================*/
/* Revealing Stalk Me links */
/*================================================*/
  $('.stalkme').click(function() {
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
/*
  //console.log('Scroll beginning: ' + scrolled);
  $('#learn_btn').click(function() {
    scrolled = scrolled + 594;
    console.log('Scrolled: ' + scrolled);
    $('body').animate({
      scrollTop: scrolled 
    });
    scrolled = 0;
  });
*/  
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
  // Detect orientation changes of mobile phones
  window.addEventListener("orientationchange", function() {
    divHeight = $(window).height();
    $('#main_hero').css('height',divHeight);
    $('.stars').css('height',divHeight);
    $('#about_hero').css('height',divHeight);
    $('#projects_hero').css('height',divHeight);     
  });

/*================================================*/
/*  Change contents of Projects */
/*================================================*/ 
  $('.project_buttons').click(function() {
  // Remove tablesavvy (first loaded project)
  if(!didOnce) {
    $('#tablesavvy').animate({'bottom': "+=10px"});  
    $('#tablesavvy').removeClass('projhover');
    $('#tablesavvy li').removeClass('projtexthover'); 
    didOnce = true;
  }     
  /* First move button down... */  
    $(this).animate({
      'bottom': "-=10px" //move down
    });
    var button_name = $(this).attr('data-button');  
  /* ...then change the colours */    
    $(this).addClass('projhover');
    $('#'+button_name+' li').addClass('projtexthover');
  /* Then load contents of the project: */
    loadProjectContents(button_name);

  // Create history of last button clicked:
    button_history[index] = button_name;
    var last_button = button_history[index-1];    
    /*console.log(index);
    console.log(button_history);
    console.log('current button: '+button_name);    
    console.log('last button: '+last_button); */
    if(button_name != last_button) {
      //move it back up
      $('#'+last_button).animate({'bottom':'+=10px'});
      //change to original colours
      $('#'+last_button).removeClass('projhover');
      $('#'+last_button+' li').removeClass('projtexthover');
    }
    index++;    
  });

/*================================================*/
/* Burger Menu */
/*================================================*/
  $('#name img').click(function() {

  });

});//end main
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
  $(div).bind('proximity', {max:300}, function(e, proximity, distance){    
    $(div).css({
      width: (proximity/3) * 100 + '%',
      height: (proximity/3) * 100 + '%'
    });
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

function loadProjectContents(button_name) {

  // Remove animation classes
  $('.project_visual').removeClass('fadeIn fadeInLeft slower');  

  var image_pt1 = 'url(images/';
  var image_pt2 = '.jpg) center top no-repeat';
  var project = image_pt1+button_name+image_pt2;  

  $('.project_visual').css('background', project);
  $('.project_visual').css('background-size','cover'); 

  switch(button_name) {
    case 'tablesavvy':
      $('.project_title h1').html('TableSavvy');
      $('.project_roles h2').html('Role: UX Lead, Visual Design');  
      $('.project_description').html(tablesavvy_desc);
      break;
    case 'centup':
      $('.project_title h1').html('CentUp');
      $('.project_roles h2').html('Role: UX Research, Micro-interaction'); 
      $('.project_description').html(centup_desc);                 
      break;
    case 'fifthcapital':
      $('.project_title h1').html('Fifth Capital');
      $('.project_roles h2').html('Role: Visual Direction, Code (html, css, js)');   
      $('.project_description').html(fifthcapital_desc);            
      break;
    case 'stamplay':
      $('.project_title h1').html('Stamplay');
      $('.project_roles h2').html('Role: Prototype, Code (html, css, js)');  
      $('.project_description').html(stamplay_desc);             
      break;
    case 'twincest':
      $('.project_title h1').html('Twincest');
      $('.project_roles h2').html('Role: Visual Design, Code (html, css, js)');
      $('.project_description').html(twincest_desc);               
      break;                         
  }       
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
