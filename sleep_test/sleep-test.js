// const pervIcon = '<i class="fa-solid fa-chevron-left fa-2xl"></i> ';
// const nextIcon = '<i class="fa-solid fa-chevron-right fa-2xl"></i>';
const owlText = $('.owl-test-carousel');
owlText.owlCarousel({
   margin: 10,
   nav: true,
   navText: [
      "perv",
      "next"
   ],
   dots: false,
   responsive: {
      0: {
         items: 1
      }
   }
});