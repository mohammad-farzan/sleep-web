/* //////////////////// sec-1 //////////////////// */
let leftSide = document.querySelectorAll(".left-side");
let rightSide = document.querySelectorAll(".right-side");

let observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.transition = "1s";
      entry.target.style.transform = "translateX(0px)";
      entry.target.style.opacity = "1";

    } else {
      entry.target.style.opacity = "0";

      if (entry.target.classList.contains("right-side")) {
        entry.target.style.transform = "translateY(-250px)";
      } else {
        entry.target.style.transform = "translateX(-250px)";
      }
    }
  });
});


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