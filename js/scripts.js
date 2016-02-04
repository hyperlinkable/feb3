$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially_showing").toggle();
    $("#initially_hidden").toggle();
  });

  $(".clickable2").click(function() {
    $("#walrus").fadeToggle(2000);
  });

});
