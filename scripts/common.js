const navBar = document.querySelector('.bnr_left');
const backBox = document.querySelector('.sub_bg');
// [수정] 데스크톱 전용 lnb — .bnr_left 안의 것만 선택 (모바일 복제본 제외)
const navLi = navBar.querySelectorAll('li .lnb_depth');
console.log(navBar, backBox, navLi);

//전체화면에서 호버시 메뉴 나타나기
for(let i=0; i<6; i++){
    // [수정] display:'none' 제거 → CSS에서 처리 (모바일 복제본에 display:none 오염 방지)
    navBar.addEventListener('mouseover', function(){
        if(window.innerWidth>=1024){
            backBox.style.display='flex';
            navLi[i].style.display='flex';
        };
    });
    backBox.addEventListener('mouseover', function(){
        if(window.innerWidth>=1024){
            backBox.style.display='flex';
            navLi[i].style.display='flex';
        };
    });
    navBar.addEventListener('mouseout', function(){
        if(window.innerWidth>=1024){
            backBox.style.display='none';
            navLi[i].style.display='none';
        };
    });
    backBox.addEventListener('mouseout', function(){
        if(window.innerWidth>=1024){
            backBox.style.display='none';
            navLi[i].style.display='none';
        };
    });
}

//전체메뉴 클릭 시 전체메뉴 나타나기, 스크롤막기
const ham = document.querySelector('.bnr_short #ham');
const mBg = document.querySelector('.m_bg');
const sideXBtn = document.querySelector('.top .close_ham');

ham.addEventListener('click', function(){
    mbgSH('block');
    document.body.style.overflow = 'hidden';
});
sideXBtn.addEventListener('click', function(){
    mbgSH('none');
    document.body.style.overflow = 'visible';
});

function mbgSH(status){ return mBg.style.display = status;};

//데스크톱 메뉴(gnb) 복제해서 모바일메뉴(m_nav)위치에 붙여넣기
const mNav = mBg.querySelector('.m_nav');
const gnbUl = document.querySelector('.top_bnr .nav');
const gnbClone = gnbUl.cloneNode(true);
mNav.appendChild(gnbClone); // ← 반드시 appendChild 이후에 mGnb 선택

//모바일 메뉴 기준
//navmain 또는 arrow_btn 클릭시 lnb 여닫기 (height 토글)
const mGnb = mBg.querySelectorAll('.nav > li'); // appendChild 이후에 선택
console.log(mGnb);

// [수정] for 루프 안 function 선언 → 호이스팅 클로저 문제 방지를 위해 IIFE 패턴 사용
for(let li of mGnb){
    (function(li){
        const lnb      = li.querySelector('.lnb_depth');
        const navmain  = li.querySelector('.navmain');
        const arrowBtn = li.querySelector('.arrow_btn');

        if(!lnb) return;

        // lnb 초기 상태: height 방식으로만 제어 (display 건드리지 않음)
        lnb.style.height     = '0px';
        lnb.style.overflow   = 'hidden';
        lnb.style.transition = 'height 0.3s';

        function toggleLnb(e){
            e.preventDefault();
            e.stopPropagation();
            const isOpen = lnb.style.height !== '0px';
            mLnbHide();
            if(!isOpen){
                lnb.style.height = lnb.scrollHeight + 'px';
                if(arrowBtn) arrowBtn.classList.add('open');
            }
        }

        if(navmain)  navmain.addEventListener('click', toggleLnb);
        if(arrowBtn) arrowBtn.addEventListener('click', toggleLnb);
    })(li);
}

function mLnbHide(){
    for(let li of mGnb){
        const lnb      = li.querySelector('.lnb_depth');
        const arrowBtn = li.querySelector('.arrow_btn');
        if(lnb)      lnb.style.height = '0px';
        if(arrowBtn) arrowBtn.classList.remove('open');
    }
}