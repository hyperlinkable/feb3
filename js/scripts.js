$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially_showing").toggle();
    $("#initially_hidden").toggle();
  });
});
