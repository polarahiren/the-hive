import 'slick-carousel';

export class App{

  init() {

    $('.large-slider').slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 300,
      autoplay: true,
      slidesToShow: 1,
      responsive: [
          {
              breakpoint: 768,
              settings: {
                  arrows: true
              }
          }
      ]
  });

//   testimonial slider

    $('.testimonial-slider').slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 300,
      autoplay: true,
      slidesToShow: 1,
      responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: false,
            }
        }
    ]
    });


    // news  slider
    $('.news-slider').slick({
        dots: false,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                  slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                }
            }
        ]
    });
    


  /* related products slider */
  $('.logos-slider').slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 400,
      autoplay: true,
      slidesToShow: 6,
      responsive: [
          {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 5,
                  arrows: false,
              }
          },
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 4,
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 3,
              }
          }
      ]
  });


  }

  slickSLider (){

  }

}