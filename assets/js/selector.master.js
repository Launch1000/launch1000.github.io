 $(document).ready(function() {
//BEGIN jQuery Selectors
	//BEGIN Smoove
    $(window).scroll(function () {
        if ($(window).scrollTop() > 10) {
            $('nav').addClass('shrink-nav');
        } else {
            $('nav').removeClass('shrink-nav');
        }
    });
jQuery(function($) {
                $(document).ready( function() {
                  //enabling stickUp on the '.navbar-wrapper' class

                  $('.navigation').stickUp({ marginTop: 'auto',
                        parts: {
                          0:'solutions-section',
                          1:'design_development-section',
                          2:'email_communication-section',
                          3:'hosting_domain-section',
                          4:'start_new_project-section',
                        },
                        itemClass: 'menuItem',
                        itemHover: 'active'
                      });
                });
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

//END jQuery Selectors    
});
