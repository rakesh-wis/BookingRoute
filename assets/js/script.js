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


$('#details-carousel').owlCarousel({
   loop: true,
   margin: 0,
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


$('#destination-slider').owlCarousel({
   loop: true,
   margin: 20,
   nav: false,
   dots: true,
   dotsEach: true,
   responsive: {
      0: {
         items: 1,
   dots: true,

      },
      600: {
         items: 3,
   dots: true,

      },
      1000: {
         items: 5,
   dots: true,

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

function myFunction(x) {
   x.classList.toggle("change");
}

$('.select-room-guest').on('click', function(){
   $('.select-room').toggle()
})

var sync1 = $(".slider");
var sync2 = $(".navigation-thumbs");

var thumbnailItemClass = '.owl-item';

var slides = sync1.owlCarousel({
	video:true,
  startPosition: 12,
  items:1,
  loop:true,
  margin:10,
  autoplay:true,
  autoplayTimeout:6000,
  autoplayHoverPause:false,
  nav: false,
  dots: true
}).on('changed.owl.carousel', syncPosition);

function syncPosition(el) {
  $owl_slider = $(this).data('owl.carousel');
  var loop = $owl_slider.options.loop;

  if(loop){
    var count = el.item.count-1;
    var current = Math.round(el.item.index - (el.item.count/2) - .5);
    if(current < 0) {
        current = count;
    }
    if(current > count) {
        current = 0;
    }
  }else{
    var current = el.item.index;
  }

  var owl_thumbnail = sync2.data('owl.carousel');
  var itemClass = "." + owl_thumbnail.options.itemClass;


  var thumbnailCurrentItem = sync2
  .find(itemClass)
  .removeClass("synced")
  .eq(current);

  thumbnailCurrentItem.addClass('synced');

  if (!thumbnailCurrentItem.hasClass('active')) {
    var duration = 300;
    sync2.trigger('to.owl.carousel',[current, duration, true]);
  }   
}

var thumbs = sync2.owlCarousel({
  startPosition: 12,
  items:4,
  loop:false,
  margin:10,
  autoplay:false,
  nav: false,
  dots: false,
  onInitialized: function (e) {
    var thumbnailCurrentItem =  $(e.target).find(thumbnailItemClass).eq(this._current);
    thumbnailCurrentItem.addClass('synced');
  },
})
.on('click', thumbnailItemClass, function(e) {
    e.preventDefault();
    var duration = 300;
    var itemIndex =  $(e.target).parents(thumbnailItemClass).index();
    sync1.trigger('to.owl.carousel',[itemIndex, duration, true]);
}).on("changed.owl.carousel", function (el) {
  var number = el.item.index;
  $owl_slider = sync1.data('owl.carousel');
  $owl_slider.to(number, 100, true);
});
