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
        entry.target.style.transform = "translateX(250px)";
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
