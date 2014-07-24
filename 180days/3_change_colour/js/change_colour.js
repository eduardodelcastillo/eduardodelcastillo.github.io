/*
var click_counter = 0;
var colours = new Array();
colours = ["orangered","yellow","purple","blue","lime","black","gold","chartreuse","hotpink","orange","chocolate","maroon","seashell","darkslateblue","indigo","gray"];

$(document).ready(function() {
  $("button").click(function() {
    click_counter = Math.floor(Math.random() * (colours.length-1));
    //console.log(click_counter);
    $('body').css("background-color",colours[click_counter]);
  });
});
*/


//Another Solution: Truly Random Colours


$(document).ready(function() {
  $("button").click(function() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var alpha = Math.random();
    var rgba;
    $('body').css("background-color", "rgba(" + red + "," + green + "," + blue + "," + alpha +")");
    //$('body').css("background-color", 'rgba(red,green,blue,alpha)');
  });
});
