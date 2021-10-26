"use strict";

const inputTag = document.querySelector(".input");//html의 input클래스를 inputTag 상수로 선언

let tagArr = [];//tag 배열 선언

inputTag.addEventListener('keyup', (event) => {//inputTag가 keyup이벤트를 당하는 인자. event가 함수의 매개변수
    if (event.key === "Enter") {//enter가 눌렸을 때
        const span = document.createElement("span");//span 요소를 만들어줌
        
        span.addEventListener('click',() => {//span을 클릭했을 때 
            span.remove();//span은 사라집니다. 
        });

        span.setAttribute("class", "tag");//span에 tag라는 클래스를 만들어줍니다
        span.innerText = event.target.value;//새로 만들어진 target의 값(내용)을 span.innerText로 넣어준다
        document.body.insertBefore(span,inputTag);// inputTag 노드 바로 앞에 span을 추가

        tagArr.push(span.innerText)//tagArr배열 끝에 span.innerText 요소 추가
        event.target.value = "";//다시 공백으로 만들어주기
    }
});