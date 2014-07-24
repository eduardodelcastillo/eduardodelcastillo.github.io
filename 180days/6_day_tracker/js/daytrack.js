var currentDate = new Date();
var currentDay 

$('document').ready(function() {
//Find out what day it is today!
/* Note about getDay() method:
    Sun = 0, Mon = 1, Tue = 2, Wed = 3, Thu = 4, Fri = 5, Sat = 6
   
   if getDay() = 4, meaning Thursday, the bar_day_tracker should be moved about 300px to the right
*/ 
  currentDay = currentDate.getDay();

  switch(currentDay) {
    case 1: 
      $('#bar_day_tracker').css('margin-left','104px'); 
      $('#Mon').css('background-color','#07CE00');
      $('#message').html('Energy Monday, yo!'); 
      $('#day_bottom').html('Mon');
      $('#Mon h2').css('visibility','hidden');            
      break;
    case 2:
      $('#bar_day_tracker').css('margin-left','208px'); 
      $('#Tue').css('background-color','#07CE00');
      $('#message').html('Cheap-Ass Tuesday here, yo!');
      $('#day_bottom').html('Tue');  
      $('#Tue h2').css('visibility','hidden');                   
      break;    
    case 3:
      $('#bar_day_tracker').css('margin-left','312px'); 
      $('#Wed').css('background-color','#07CE00');
      $('#message').html('Wonder Wednesday, yo!');
      $('#day_bottom').html('Wed');
      $('#Wed h2').css('visibility','hidden');                     
      break;    
    case 4:
      $('#bar_day_tracker').css('margin-left','416px'); 
      $('#Thu').css('background-color','#07CE00');
      $('#message').html('Terrific Thursday, yo!');  
      $('#day_bottom').html('Thu'); 
      $('#Thu h2').css('visibility','hidden');                  
      break;    
    case 5:
      $('#bar_day_tracker').css('margin-left','520px'); 
      $('#Fri').css('background-color','#07CE00');
      $('#message').html('TGIF, yo!');   
      $('#day_bottom').html('Fri');
      $('#Fri h2').css('visibility','hidden');                  
      break;    
    case 6:
      $('#bar_day_tracker').css('margin-left','624px'); 
      $('#Sat').css('background-color','#07CE00');
      $('#message').html('Shameless Saturday, yo!'); 
      $('#day_bottom').html('Sat'); 
      $('#Sat h2').css('visibility','hidden');                   
      break;    
    default: 
      $('#Sun').css('background-color','#07CE00'); 
      $('#message').html('Lazy Sunday here, yo!');
      $('#day_bottom').html('Sun'); 
      $('#Sun h2').css('visibility','hidden');              
      break;                    
  }
});