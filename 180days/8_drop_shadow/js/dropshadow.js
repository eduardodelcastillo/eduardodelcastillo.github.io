var dshadow_blur = 0;
var dshadow_spread = 0;

$('document').ready(function() {
  $('#angel').click(function() {
    //increase the blur and spread of drop shadow css
    dshadow_blur += 2;
    dshadow_spread += 2;
    $(this).css('box-shadow','0 0 ' + dshadow_blur+'px ' + dshadow_spread+'px ' + 'black');
    console.log(dshadow_blur);
  });
});