$(document).ready(function() {
  $("#grass-div").hover(function() {
    $("audio").trigger("play");  
    }, function() {
    $("audio").trigger("pause");
  })
})