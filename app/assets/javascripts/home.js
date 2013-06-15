$(function() {
  cbpFixedScrollLayout.init();

  Grid.init();

  // Skills button
  var skillsView = $("#skills");
  var tagsView   = skillsView.find('.tags');
  var height     = parseInt( tagsView.height() );

  $('#skills-more').on('click', function() {
    var icon = $(this).find('i');
    if ( icon.hasClass('icons-minus') ) {
      skillsView.find('.shown')
        .fadeOut('slow', function() {
          tagsView.height( height );
        })
        .removeClass('shown')
        .addClass('hide');

      icon.addClass('icons-plus')
        .removeClass('icons-minus');
    } else {
      tagsView.height( height + 60 );
      skillsView.find('.hide')
        .fadeIn('slow')
        .removeClass('hide')
        .addClass('shown');

      icon.addClass('icons-minus')
        .removeClass('icons-plus');
    }
  });

  // Share it
  var addthis_config = {
    "data_track_addressbar": true,
  };


});