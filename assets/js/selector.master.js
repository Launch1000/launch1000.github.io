 $(document).ready(function() {
//BEGIN jQuery Selectors
	//BEGIN Smoove
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $('nav#index').addClass('scroll-down');
        } else {
            $('nav#index').removeClass('scroll-down');
        }
    });


$('.covervid-video').coverVid(720, 480);

    $('#main').scrollupba();
  


jQuery(function($) {
                $(document).ready( function() {
                  //enabling stickUp on the '.navbar-wrapper' class

                  $('nav#inde').stickUp({ marginTop: 'auto',
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


jQuery(document).ready(function($){
  var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;

  //open team-member bio
  $('#sider').find(' .action').on('click', function(event){
    event.preventDefault();
    var selected_member = $(this).data('type');
    $('.slideInContainer.'+selected_member+'').addClass('slide-in');
    $('.cd-member-bio-close').addClass('is-visible');

    // firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
    if( is_firefox ) {
      $('body').addClass('slide-out').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
        $('body').addClass('overflow-hidden');
      });
    } else {
      $('body').addClass('slide-out');
      $('body').addClass('overflow-hidden');
    }

  });

  //close team-member bio
  $(document).on('click', '.cd-overlay, .slideInContainer, .cd-member-bio-close', function(event){
    event.preventDefault();
    $('.slideInContainer').removeClass('slide-in');
    $('.cd-member-bio-close').removeClass('is-visible');

    if( is_firefox ) {
      $('body').removeClass('slide-out').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
        $('body').removeClass('overflow-hidden');
      });
    } else {
      $('body').removeClass('slide-out');
      $('body').removeClass('overflow-hidden');
    }
  });
});

//END jQuery Selectors    
});
