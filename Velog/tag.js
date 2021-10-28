"use strict";

const container = document.querySelector(".container");
const inputTag = document.querySelector(".input");//html의 input클래스를 inputTag 상수로 선언

const tagArr = new Set();//tag 배열 선언

const createTag = (value) => {
    const newTag = document.createElement("span");//span 요소를 만들어줌
    newTag.className = 'container__tag';
    newTag.innerText = value;//새로 만들어진 target의 값(내용)을 span.innerText로 넣어준다
    container.appendChild(newTag);

    newTag.addEventListener('click',(e) => {//span을 클릭했을 때 
        newTag.remove();//span은 사라집니다. 
        tagArr.delete(e.target.innerText);
    });

    tagArr.add(value);

}

inputTag.addEventListener('keyup', (event) => {//inputTag가 keyup이벤트를 당하는 인자. event가 함수의 매개변수
    if (event.key === "Enter") {//enter가 눌렸을 때
        const inputValue = event.target.value.trim();//span 요소를 만들어줌
        if (!inputValue) return false;

        if (!tagArr.has(inputValue)) createTag(inputValue);
        event.target.value = '';
    }
});