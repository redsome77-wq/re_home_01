const heroBnr = document.querySelector ('.heroswiper');
const lookbookBig = document.querySelector ('.bigbdle');
const lookbookZone = document.querySelector ('.lb_swiper');
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
    loop:true,
    slidesPerView: 1,
    pagination : {
        //페이지 대상 html 연결, 모양, 동적옵션
        el:'.web + .web_page', //부모선택자 1~2개는 작성해서 구분해주기
        type:'fraction', //기본값 'bullets', 'fraction':페이지 번호형
        //dynamicBullets:true, //type이 bullets(기본값)일때만 가능
    },
});

const lookSwiper = new Swiper(lookbookZone, {
    loop:true,
    slidesPerView: 2.1,
    spaceBetween: 17,
    scrollbar: {
        el: ".lb_swiper .swiper-scrollbar",
        hide: false,
    },
});

const brandSwiper = new Swiper(brandZone, {
    loop:true,
    slidesPerView: 3,
    spaceBetween: 10,
    scrollbar: {
        el: ".brandcard .swiper-scrollbar",
        hide: false,
    },
});