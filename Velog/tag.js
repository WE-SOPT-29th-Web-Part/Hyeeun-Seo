"use strict";

const input = document.querySelector(".input");

input.addEventListener('keyup', (event) => {
    if (event.key === "Enter") {
        console.log("hi")
        
        const span = document.createElement("span");

        span.addEventListener('click',() => {
            span.remove();
        });

        span.setAttribute("class", "tag");
        span.innerText = input.value;

        input.appendChild(span);
        
        input.value = "";
    }
});