(function($) {

  'use strict';

  let $filters = $('.filter [data-filter]'),
    $boxes = $('.boxes [data-category]');

  $filters.on('click', function(e) {
    e.preventDefault();
    let $this = $(this);
    
    $filters.removeClass('active');
    $this.addClass('active');

    let $filterColor = $this.attr('data-filter');

    if ($filterColor == 'all') {
      $boxes.removeClass('is-animated')
        .fadeOut().promise().done(function() {
          $boxes.addClass('is-animated').fadeIn();
        });
    } else {
      $boxes.removeClass('is-animated')
        .fadeOut().promise().done(function() {
          $boxes.filter('[data-category = "' + $filterColor + '"]')
            .addClass('is-animated').fadeIn();
        });
    }
  });

})(jQuery);