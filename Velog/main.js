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

    if(dp.style.display === 'block') {
        dp.style.display = 'none';
        return;
    } 
        dp.style.display = 'block';
};

navBtn.addEventListener("click", onclickMenu);

//b. dropdown 메뉴 클릭했을 때, 색 변화 
//글씨색이 녹색으로 변하고, 나머지 글씨색 검은색, 버튼 값에 클릭한 글자 반환
const navDropDownList = document.querySelector(".nav__dropdown");
let navBtnText = document.querySelector(".nav__period--text");

function clickDropDownList(e) {

    navBtnText.innerText = e.target.innerText;

    Array.from(navDropDownList.children).forEach((element) =>
        element.classList.remove("selected")
    );
    e.target.classList.add("selected");    
};

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
    const t = e.target.closest("article");
    const cloneCard = t.cloneNode(true);

    if (cardContent.firstElementChild) {
        const child = cardContent.firstElementChild;
        cardContent.replaceChild(cloneCard, child);
    } else {
        cardContent.append(cloneCard);
    }

    cloneCard.style.transition = "none"; 
    cloneCard.style.transform = "none"; 
    cloneCard.style.boxShadow = "none"; 
    document.body.style.overflow = "hidden";
    modal.classList.remove("hidden");
};

function closeModal () {
    modal.classList.add("hidden");
    document.body.style.overflow = "visible";
};

overlay.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);
clickCard.addEventListener("click", openModal);

