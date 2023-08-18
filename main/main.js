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
