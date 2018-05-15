$(document).ready(function () {
  $('.autoplay').slick({
    infiniti: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                  breakpoint: 768,
                  settings: {
                      slidesToShow: 1
                  }
                }]
  });
});
