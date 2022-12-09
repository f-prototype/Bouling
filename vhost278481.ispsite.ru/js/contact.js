import {addModal} from "./modal.js";
import {addMenu} from "./header.js";
addMenu();

addModal();

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