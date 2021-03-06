"use strict";
//엄격모드

//1. add 버튼을 눌렀을 때, list가 추가되도록
//2. enter 키보드 키를 눌렀을 때 list가 추가되도록
//3. 쓰레기통을 누르면 지워지도록.
//4. 오늘만보기, 내일만보기, 함께보기, 필터링 적용

//1. add 버튼을 눌렀을 때, list가 추가되도록
//a. add 버튼을 눌렀을 때, input의 value를 가져오기
//b. 가져온 value를 바탕으로, list 만들기

//DOM 요소를 가지고 오는 방법
const input = document.querySelector(".todos__input");  
const addBtn = document.querySelector(".todos__btn--wrapper > span");
const items = document.querySelector(".todos__items");

const addList = () => {
    const li = document.createElement("li");
    const span = document.createElement("span");   
    const deleteBtn = document.createElement("button");
    const img = document.createElement("img");

    deleteBtn.addEventListener ('click',() => {
        li.remove();
    });
    //태그를 만드는 과정
    li.setAttribute("class", "todos__item");
    span.setAttribute("class", "todos__span");
    deleteBtn.setAttribute("class", "todos__delete");
    img.setAttribute("src", "./assets/icon/trash-can.svg");

    // deleteBtn.innerText = "X";
    span.innerText = input.value;

    //붙여주기
    items.appendChild(li);
    deleteBtn.appendChild(img);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    input.value = "";//다시 공백으로 만들어주기
}

//1. add 버튼을 눌렀을 때, list가 추가되도록
addBtn.addEventListener("click", () => {
    if (!input.value) return;
    //console.log('input.value', input.value);
    addList();
});

//2. enter 키보드 키를 눌렀을 때 list가 추가되도록 
input.addEventListener('keyup', (event) => {
    if (!input.value) return;
    if (event.key === "Enter") {
        addList();
    }
});

//3. 쓰레기통을 누르면 지워지도록.
const trash = document.querySelectorAll(".todos__delete");
trash.forEach((t) => {
    const target = t.closest("li");
    t.addEventListener("click", () => {
        target.remove();
    })
});

//4. 오늘만보기, 내일만보기, 함께보기, 필터링 적용
const options = document.querySelector(".options");
const todaySection = document.querySelector(".todos__today");
const tomorrowSection = document.querySelector(".todos__tomorrow");

options.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("options__today")){
        todaySection.classList.add("open");
        tomorrowSection.classList.remove("open");
    }
    else if(target.classList.contains("options__tomorrow")){
        todaySection.classList.remove("open");
        tomorrowSection.classList.add("open");
    }
    else if(target.classList.contains("options__both")){
        todaySection.classList.add("open");
        tomorrowSection.classList.add("open");
    }
});

