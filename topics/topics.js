/* //////////////////// sec-3 owl carousel //////////////////// */
const pervIcon = '<i class="fa-solid fa-chevron-left fa-2xl"></i> ';
const nextIcon = '<i class="fa-solid fa-chevron-right fa-2xl"></i>';
const owl = $('.owl-carousel');
owl.owlCarousel({
    loop: true,
    margin: 20,
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
        650: {
            items: 3
        },
        900: {
            items: 4
        },
        1350: {
            items: 5
        }
    }
});