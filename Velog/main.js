// "use strict";
//엄격모드

//1. 오늘/이번주/이번달/올해 Dropdown 구현
//2. 모달창 구현
//3. 태그 추가 및 삭제

//1. 오늘/이번주/이번달/올해 Dropdown 구현'
//a. nav__period__btn을 눌렀을 때 nav__dropdown 오픈
//b. dropdown 메뉴 클릭했을 때, nav__dropdown 닫히고 btn 안의 값 변화

const navBtn = document.querySelector(".nav__period");

function openCloseToc() {
    console.log("hi")
    const dp = document.querySelector('.nav__dropdown');

    if(dp.style.display === 'none') {
        dp.style.display = 'block';
    } else {
        dp.style.display = 'none';
    }
};

navBtn.addEventListener("click", openCloseToc);