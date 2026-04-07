const heroBnr = document.querySelector ('.heroswiper');
const lookbookZone = document.querySelector ('.lb_swiper');
const brandZone = document.querySelector ('.brandcard');

const heroSwiper = new Swiper(heroBnr, {
    loop:true,
    slidesPerView: 1,
});
const lookSwiper = new Swiper(lookbookZone, {
    loop:true,
    slidesPerView: 2.1,
    spaceBetween: 17,
});
const brandSwiper = new Swiper(brandZone, {
    loop:true,
    slidesPerView: 3,
    spaceBetween: 10,
});