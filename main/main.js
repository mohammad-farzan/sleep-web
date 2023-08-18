let leftSide = document.querySelectorAll(".imgs");
let rightSide = document.querySelectorAll(".pic-text");

let observer = new IntersectionObserver(function (entries) {
    
  entries.forEach((entry) => {

    
    if (entry.isIntersecting) {
      entry.target.style.transition = ".8s";
      entry.target.style.transform = "translateY(0px)";
      entry.target.style.opacity = "1";

    } else {
      entry.target.style.opacity = "0";
      entry.target.style.transform = "translateY(30px)";
      if (entry.target.classList.contains("pic-text")) {

        entry.target.style.transform = "translateY(50px)";
      }
    }
    if (entry.target.classList.contains("pic-text")) {
      entry.target.style.transition = "1.6s";

    }
  });
},{threshold: [.3]});




rightSide.forEach((element) => {
  observer.observe(element);
});


leftSide.forEach((element) => {
  observer.observe(element);
});

/* //////////////////// sec-2 owl-text-carousel //////////////////// */
const pervIcon = '<i class="fa-solid fa-chevron-left fa-2xl"></i> ';
const nextIcon = '<i class="fa-solid fa-chevron-right fa-2xl"></i>';
const owlText = $('.owl-text-carousel');
owlText.owlCarousel({
  loop: true,
  autoplay: true,
  margin: 10,
  nav: true,
  navText: [
    pervIcon,
    nextIcon
  ],
  dots: false,
  responsive: {
    0: {
      items: 1
    }
  }
});
/* //////////////////// sec-3 owl carousel //////////////////// */
const owl = $('.owl-carousel');
owl.owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    pervIcon,
    nextIcon
  ],
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    900:{
      items:4
    },
    1350: {
      items: 5
    }
  }
});