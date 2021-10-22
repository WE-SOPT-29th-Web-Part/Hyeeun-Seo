"use strict";
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
const navDropDownList = document.querySelector(".nav__dropdown");
let navBtnText = document.querySelector(".nav__period--text");

function clickDropDownList (e) {
    const todayBtn = document.querySelector(".nav__dropdown--today");
    const weekBtn = document.querySelector(".nav__dropdown--week");
    const monthBtn = document.querySelector(".nav__dropdown--month");
    const yearBtn = document.querySelector(".nav__dropdown--year");
    
    const target = e.target;
    console.log (target);

    const innerText = () => {
        navBtnText.innerText = target.innerText;
    }

    if (target.classList.contains("nav__dropdown--today")) {
        innerText();
        todayBtn.style.color = 'rgb(62, 194, 62)';
        weekBtn.style.color = 'black';
        monthBtn.style.color = 'black';
        yearBtn.style.color = 'black';
    } else if (target.classList.contains("nav__dropdown--week")) {
        innerText();
        weekBtn.style.color = 'rgb(62, 194, 62)';
        todayBtn.style.color = 'black';
        monthBtn.style.color = 'black';
        yearBtn.style.color = 'black';
    } else if (target.classList.contains("nav__dropdown--month")) {
        innerText();
        monthBtn.style.color = 'rgb(62, 194, 62)';
        todayBtn.style.color = 'black';
        weekBtn.style.color = 'black';
        yearBtn.style.color = 'black';
    } else if (target.classList.contains("nav__dropdown--year")) {
        innerText();
        yearBtn.style.color = 'rgb(62, 194, 62)';
        todayBtn.style.color = 'black';
        weekBtn.style.color = 'black';
        monthBtn.style.color = 'black';
    }
    
}

navDropDownList.addEventListener("click", clickDropDownList);


//2. 모달창 구현
//a. card 클릭 시, modal을 띄운다
//b. X 클릭 시 modal이 내려간다
//c. modal이 띄어진 동안, scroll이 되지 않도록 한다
const clickCard = document.querySelector('.cards');
const modal = document.querySelector('.modal');
const content = modal.querySelector(".modal__content");
const cardContent = modal.querySelector(".modal__card__content");
const overlay = modal.querySelector(".modal__overlay");
const closeBtn = modal.querySelector(".modal__card__closebtn");

function openModal (e){
    const target = e.target.closest("article");
    const cloneCard = target.cloneNode(true);

    if (cardContent.firstElementChild) {
        const child = cardContent.firstElementChild;
        cardContent.replaceChild(cloneCard, child);
    } else {
        cardContent.append(cloneCard);
    }

    modal.classList.remove("hidden");
};
console.log("bye");

function closeModal () {
    modal.classList.add("hidden");
    document.body.style.overflow = "visible";
};

overlay.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);
clickCard.addEventListener("click", openModal);

//모달창 개수
//모달창 켜졌을 때 스크롤 고정