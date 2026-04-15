const heroBnr = document.querySelector ('.heroswiper');
const lookbookBig = document.querySelector ('.bigbdle');
const lookbookZone = document.querySelectorAll ('.right_wrap .lb_swiper');
const brandZone = document.querySelector ('.brandcard');

const heroSwiper = new Swiper(heroBnr, {
    loop:true,
    slidesPerView: 1,
    scrollbar: {
        el: ".heroswiper .swiper-scrollbar",
        hide: false,
    },
});

const lookBigSwiper = new Swiper(lookbookBig, {
    allowTouchMove: false,
    loop:true,
    slidesPerView: 1,
    pagination : {
        el:'.bigbdle .swiper-pagination',
        type:'fraction',
    },
    navigation: {
        nextEl:'.swiper-wrapper .next',
        prevEl:'.swiper-wrapper .prev',
    },
});

for(let i=0; i<3; i++){
    const lookSwiper = new Swiper(lookbookZone[i], {
        loop:true,
        slidesPerView: 2.1,
        spaceBetween: 17,
        scrollbar: {
            el: ".lb_swiper .swiper-scrollbar",
            hide: false,
        },
    });
};

const brandSwiper = new Swiper(brandZone, {
    loop:true,
    slidesPerView: 3,
    spaceBetween: 10,
    scrollbar: {
        el: ".brandcard .swiper-scrollbar",
        hide: false,
    },
});