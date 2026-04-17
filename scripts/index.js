const heroBnr = document.querySelector ('.heroswiper');
const lookbookBig = document.querySelector ('.bigbdle');
const lookbookZone = document.querySelectorAll ('.right_wrap .lb_swiper');
const brandZone = document.querySelector ('.brandcard');
const wishBtn = document.querySelector('.wish_btn img')

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
        el:'.bigbdle .pnum .page',
        type:'fraction',
    },
    navigation: {
        nextEl:'.pnum .next',
        prevEl:'.pnum .prev',
    },
});

for(let i=0; i<3; i++){
    const lookSwiper = new Swiper(lookbookZone[i], {
        loop:true,
        slidesPerView: 2,
        spaceBetween: 17,
        scrollbar: {
            el: ".lb_swiper .swiper-scrollbar",
            hide: false,
        },
        breakpoints:{
            401:{
                slidesPerView: 2.1,
            },
            1202:{
                slidesPerView: 2.1,
            },
        },
    });
};

const brandSwiper = new Swiper(brandZone, {
    loop:true,
    slidesPerView: 1,
    spaceBetween: 10,
    scrollbar: {
        el: ".brandcard .swiper-scrollbar",
        hide: false,
    },
        breakpoints:{
            401:{
                slidesPerView: 1,
            },
            850:{
                slidesPerView: 2,
            },
            1023:{
                slidesPerView: 3,
            },
        },
    });