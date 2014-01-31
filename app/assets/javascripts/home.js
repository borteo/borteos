analytics.initialize({
  'Google Analytics': {
    trackingId: 'UA-20912101-2'
  }
});

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

  $.validate();


  $('#contacts')
    .bind('ajax:complete', function (evt, xhr, settings) {
      $('#contacts :submit').removeClass('loading');
      $('#contacts .result')
        .html('')
        .html(xhr.responseText)
        .addClass('show');

    })
    .bind("ajax:beforeSend", function (evt, xhr, settings) {
      $('#contacts :submit').addClass('loading');
    });

  $("#curriculum-vitae").on('click', function() {
    analytics.track('Downloaded Curriculum');
  });

  analytics.page('Homepage');
  
});