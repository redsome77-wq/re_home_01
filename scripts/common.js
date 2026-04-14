const navBar = document.querySelector('.bnr_left');
const backBox = document.querySelector('.sub_bg');
const navLi = document.querySelectorAll('li .lnb_depth');
console.log(navBar, backBox, navLi);

for(let i=0; i<6; i++){
    navLi[i].style.display='none';
    navBar.addEventListener('mouseover', function(){
        backBox.style.display='flex';
        navLi[i].style.display='flex';
    });
    backBox.addEventListener('mouseover', function(){
        backBox.style.display='flex';
        navLi[i].style.display='flex';
    });
    navBar.addEventListener('mouseout', function(){
        backBox.style.display='none';
        navLi[i].style.display='none';
    });
    backBox.addEventListener('mouseout', function(){
        backBox.style.display='none';
        navLi[i].style.display='none';
    });
};