// home page carousel
$('#property-carousel').owlCarousel({
   loop: true,
   margin: 40,
   dots: true,
   nav: false,
   responsive: {
      0: {
         items: 1,
         dots: true,
         nav: false  
      },
      600: {
         items: 2,
         dots: true,
      },
      800:{
         items:3,
         dots: true,
      },
      1000: {
         items: 4,
         dots: true,
      },
   },
});

$('#offers-carousel').owlCarousel({
   loop: true,
   margin: 20,
   dots: true,
   dotsEach: true,
   autoplay: true,
   autoplayTimeout: 3000,
   responsive: {
      0: {
         items: 1,
         dots: false,
         dotsEach: false,
      },
      575:{
         items:1,
         dots:false,
         dotsEach: false,
      },
      600: {
         items: 1.5,
         dots: false,
         dotsEach: false,
      },
      1000: {
         items: 2.5,
      },
   },
});


$('#property-details-carousel').owlCarousel({
   loop: true,
   margin: 40,
   nav: true,
   dots: true,
   dotsEach: true,
   responsive: {
      0: {
         items: 1,
      },
      600: {
         items: 1,
      },
      1000: {
         items: 1,
      },
   },
});


$('#rooms_carousel').owlCarousel({
   loop: true,
   margin: 40,
   nav: false,
   dots: true,
   dotsEach: true,
   responsive: {
      0: {
         items: 1,
      },
      600: {
         items: 1,
      },
      1000: {
         items: 1,
      },
   },
});

$('#rooms_carousel1').owlCarousel({
   loop: true,
   margin: 40,
   nav: false,
   dots: true,
   dotsEach: true,
   responsive: {
      0: {
         items: 1,
      },
      600: {
         items: 1,
      },
      1000: {
         items: 1,
      },
   },
});

// taxi booking carousel
$('#taxiBooking-carousel').owlCarousel({
   loop: true,
   margin: 40,
   dots: false,
   nav: true,
   responsive: {
      0: {
         items: 1,
      },
      600: {
         items: 3,
      },
      1000: {
         items: 4,
      },
   },
});

function myFunction(x) {
   x.classList.toggle("change");
 }