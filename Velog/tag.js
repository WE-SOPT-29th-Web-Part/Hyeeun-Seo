"use strict";

const input = document.querySelector(".input");

let tagArr = [];

input.addEventListener('keyup', (event) => {
    if (event.key === "Enter") {
        const span = document.createElement("span");
        
        span.addEventListener('click',() => {
            span.remove();
        });

        span.setAttribute("class", "tag");
        span.innerText = event.target.value;


        document.body.insertBefore(span,input);

        const set = new Set(tagArr);
        const uniqueArr = [...set]; 
        uniqueArr.push(event.target.value)
        event.target.value = "";
    }
});