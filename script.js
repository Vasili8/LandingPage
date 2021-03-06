$(document).ready(function() {


    $('.js--scroll-to-about').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-about').offset().top}, 1000); 
     });

     $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
      });

     $('.js--wp-buy').waypoint(function(direction) {
        $('.js--wp-buy').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-city').waypoint(function(direction) {
        $('.js--wp-city').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--wp-form').waypoint(function(direction) {
        $('.js--wp-form').addClass('animated rotateInUpLeft');
    }, {
        offset: '70%'
    });

});