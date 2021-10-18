// "use strict";
//엄격모드

//1. 오늘/이번주/이번달/올해 Dropdown 구현
//2. 모달창 구현
//3. 태그 추가 및 삭제

//1. 오늘/이번주/이번달/올해 Dropdown 구현
//a. nav__period__btn을 눌렀을 때 nav__dropdown 오픈
//b. dropdown 메뉴 클릭했을 때, btn 안의 값 변화


//a. nav__period__btn을 눌렀을 때 nav__dropdown 오픈
const navBtn = document.querySelector(".nav__period__btn");

function onclickMenu() {
    const dp = document.querySelector('.nav__dropdown');

    if(dp.style.display === 'none') {
        dp.style.display = 'block';
    } else {
        dp.style.display = 'none';
    }
};

navBtn.addEventListener("click", onclickMenu);

//b. dropdown 메뉴 클릭했을 때, 색 변화 
//글씨색이 녹색으로 변하고, 나머지 글씨색 검은색, 버튼 값에 클릭한 글자 반환
const navDropDownList = document.querySelector(".nav__dropdown >li");
let navBtnText = document.querySelector(".nav__period--text");

function clickDropDownList (e) {
    const todayBtn = document.querySelector(".nav__dropdown--today");
    const weekBtn = document.querySelector(".nav__dropdown--week");
    const monthBtn = document.querySelector(".nav__dropdown--month");
    const yearBtn = document.querySelector(".nav__dropdown--year");
    
    const target = e.target;
    console.log(target);

    if (target.classList.contains("nav__dropdown--today")) {
        navBtnText.innerText = '오늘';
        todayBtn.style.color = 'rgb(62, 194, 62)';
    } else if (target.classList.contains("nav__dropdown--week")) {
        navBtnText.innerText = '이번 주';
        weekBtn.style.color = 'rgb(62, 194, 62)';
    } else if (target.classList.contains("nav__dropdown--month")) {
        navBtnText.innerText = '이번 달';
        monthBtn.style.color = 'rgb(62, 194, 62)';
    } else if (target.classList.contains("nav__dropdown--year")) {
        navBtnText.innerText = '올해';
        yearBtn.style.color = 'rgb(62, 194, 62)';
    }
}

navDropDownList.addEventListener("click", clickDropDownList);