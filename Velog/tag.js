"use strict";

const container = document.querySelector(".container");
const inputTag = document.querySelector(".input");//html의 input클래스를 inputTag 상수로 선언

const tagArr = new Set();//tag 배열  Set 객체 이용하여 선언

const createTag = (value) => {
    const newTag = document.createElement("span");//span 요소를 만들어줌
    newTag.className = 'container__tag';//클래스 이름 명명
    newTag.innerText = value;//target의 값(내용)을 newTag.innerText로 넣어준다
    container.appendChild(newTag);//container에 newTag 붙여주기

    newTag.addEventListener('click',(e) => {//newTag 클릭했을 때 
        newTag.remove();//newTag 제거 
        tagArr.delete(e.target.innerText);//tagArr에서 타겟의 텍스트도 제거
    });

    tagArr.add(value);

}

inputTag.addEventListener('keyup', (event) => {//inputTag가 keyup이벤트를 당하는 인자. event가 함수의 매개변수
    if (event.key === "Enter") {//enter가 눌렸을 때
        const inputValue = event.target.value.trim();//타겟값의 양끝 공백을 제거하여 대입
        if (!inputValue) return false;//inputValue가 없을 때 입력되지 않음

        if (!tagArr.has(inputValue)) createTag(inputValue);//중복된 게 아닐때 새로운 태그만듦
        event.target.value = '';//빈칸만들어주기
    }
});