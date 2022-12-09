import {interactiveSlider} from './interactive.js';
import {provAdd} from './prov.js';
import {addModal} from "./modal.js";
import {addMenu} from "./header.js";
addMenu();
addModal();

let sliders = document.querySelectorAll(".slider");
for(let elem of sliders){
    interactiveSlider(elem);
}

let FirstInfoBtn = document.querySelector(".first-info-button");
FirstInfoBtn.addEventListener("click", function(){
    let to = document.querySelector(".form-block");
    to.scrollIntoView({behavior: "smooth",block:"center"});
});


let btn = document.querySelector(".btn");
let form = document.querySelector(".form");

btn.onclick = function(){
    provAdd("Бронь дорожки");
};

let result = document.querySelector(".result-container");
result.addEventListener("click",function(event){
    let modal = document.querySelector(".modal-form");
    modal.reset();
    
    if(event.target.classList.contains("container-buttom") || event.target.tagName == "BUTTON"){
    result.style.display = "none";
    } else {
        return;
    }
});


                            //TEST

