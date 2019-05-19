// start hamburger
$('.hamburger-ham').click(function () {
$('.hamburger').animate({left: '0px'}, 100)
});

$('.close-hamburger').click(function () {
$('.hamburger').animate({left: '-230px'}, 100)
});
// end hamburger


// start smooth scroll anchor links
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
// end smooth scroll anchor links


// start slick
$(document).ready(function(){
    $('.slides').slick({
      infinite: true,
      speed: 200,
      arrows: true,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 4000,
      responsive: [
  {
    breakpoint: 1400,
    settings: {
      arrows: false,
      dots: true
    }
  },
  {
    breakpoint: 900,
    settings: {
      arrows: false,
      dots: true
    }
  }
]
    });
  });

// end slick

// start accordion
// https://codepen.io/MightyShaban/pen/LqrCK
(function($) {
    // $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

    $('.accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('form');

        $(this).closest('.accordion').find('form').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
})(jQuery);
// end accordion
