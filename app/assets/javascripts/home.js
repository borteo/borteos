// $(document).ready(function() {
//   $('nav').scrollspy();
  
//   $.getJSON("http://twitter.com/statuses/user_timeline/borteo.json?callback=?", function(data) {
//     console.log(data[0].text);
//   });
  
  
//   var skillsView = $("#skills")
//   $("#skills-detail").click(function() {
//     if($(this).hasClass('hide-skills')) {
//       skillsView.find('.shown').fadeOut().removeClass('shown').addClass('hide');
//       $(this).text("show more").removeClass('hide-skills');
//     }
//     else {
//       skillsView.find('.hide').fadeIn().removeClass('hide').addClass('shown');
//       $(this).text("hide").addClass('hide-skills');
//     }
//   })
  
// });

$(function() {
  cbpFixedScrollLayout.init();

  $('#about-me .picture').popover({
    placement: "right",
    delay: { show: 10, hide: 200 }
  });

  $('.social-network a').tooltip({
    placement: "bottom",
    delay: { show: 10, hide: 200 }
  });

});