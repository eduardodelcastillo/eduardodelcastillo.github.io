/* twincest.js */

$('document').ready(function() {
  $('.header-1-sub .pt-page-1 .background').click(function() {
    $('.header-1-sub .pt-page-1 pt-page-current').css('visibility','hidden');
    $('.header-1-sub .pt-page-1 .background').css('visibility','hidden');    
    $('.pt-page pt-page-2').css('visibility','visible');
    $('.pt-page pt-page-2 background').css('visibility','visible');    
  });
});