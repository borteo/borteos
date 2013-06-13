var Page = (function() {

  var $grid = $( '#sites-grid' );

  return {
    init : function() {
      $grid.find( 'div.bb-bookblock' ).each( function( i ) {
        
        var $bookBlock = $( this ),
          $nav = $bookBlock.next().children( 'span' ),
          bb = $bookBlock.bookblock( {
            speed : 600,
            shadows : false
          } );
          
        // add navigation events
        $nav.each( function( i ) {
          $( this ).on( 'click touchstart', function( event ) {
            var $dot = $( this );
            $nav.removeClass( 'bb-current' );
            $dot.addClass( 'bb-current' );
            $bookBlock.bookblock( 'jump', i + 1 );
            return false;
          } );
        } );
        
        // add swipe events
        $bookBlock.children().on( {
          'swipeleft' : function( event ) {
            $bookBlock.bookblock( 'next' );
            return false;
          },
          'swiperight' : function( event ) {
            $bookBlock.bookblock( 'prev' );
            return false;
          }

        } );
        
      } );
    }
  };

})();
    

$(function() {
  cbpFixedScrollLayout.init();

  Grid.init();

  //Page.init();

  // $('#me').popover({
  //   placement: "right",
  //   delay: { show: 10, hide: 200 }
  // });

  // Skills button
  var skillsView = $("#skills");
  var tagsView   = skillsView.find('.tags');
  var height     = parseInt( tagsView.height() );

  $("#skills-more").on('click', function() {
    if ( $(this).hasClass('hide-skills') ) {
      skillsView.find('.shown')
        .fadeOut('slow', function() {
          tagsView.height( height );
        })
        .removeClass('shown')
        .addClass('hide');

      $(this).text("show more")
        .removeClass('hide-skills');
    }
    else {
      tagsView.height( height + 60 );
      skillsView.find('.hide')
        .fadeIn('slow')
        .removeClass('hide')
        .addClass('shown');

      $(this).text("hide")
        .addClass('hide-skills');
    }
  });

});