$('document').ready(function() {
  $('.box').hover(function() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var alpha = Math.random();
    var rgb;
    $(this).css('background-color','rgb('+red+','+green+','+blue+')');
  });
});