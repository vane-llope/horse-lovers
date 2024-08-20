
var swiper2 = new Swiper(".swiper2", {
    slidesPerView: 2,
    spaceBetween: 30,
    // Responsive breakpoints
    breakpoints: {
        480: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    },
    pagination: {
        el: ".swiper-pagination-2",
        clickable: true,
        //type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next-2",
        prevEl: ".swiper-button-prev-2",
    },
});