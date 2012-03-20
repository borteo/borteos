$(document).ready(function() {
  $('nav').scrollspy();
  
  $('.navbar a,footer a.up').click(function(e){
    $.scrollTo( this.hash || 0, 1500);
    e.preventDefault();
  });
  
  $('#about-me .picture').popover({
    placement: "top",
    delay: { show: 10, hide: 200 }
  });
  
  $.getJSON("http://twitter.com/statuses/user_timeline/borteo.json?callback=?", function(data) {
    console.log(data[0].text);
  });
  
});