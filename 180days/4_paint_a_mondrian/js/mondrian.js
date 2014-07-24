$(document).ready(function() {
  //Get attribute of the palette that was clicked
  $('#palette div').click(function() {
    currPalette = $(this).css('background-color');
    //console.log(currPalette);
  });
  //Put that attribute on the canvass divs
  $('#canvass div').click(function () {
    $(this).css('background-color',currPalette);
  });
});