$(function() {
  cbpFixedScrollLayout.init();

  Grid.init();

  // Skills button
  var skillsView = $("#skills");
  var tagsView   = skillsView.find('.tags');
  var height     = parseInt( tagsView.height() );

  $('#skills-more').on('click', function() {
    if ( $(this).hasClass('hide-skills') ) {
      skillsView.find('.shown')
        .fadeOut('slow', function() {
          tagsView.height( height );
        })
        .removeClass('shown')
        .addClass('hide');

      $(this).text("show more")
        .removeClass('hide-skills');
    } else {
      tagsView.height( height + 60 );
      skillsView.find('.hide')
        .fadeIn('slow')
        .removeClass('hide')
        .addClass('shown');

      $(this).text("hide")
        .addClass('hide-skills');
    }
  });

  // Share it
  var addthis_config = {
    "data_track_addressbar": true
  };

});