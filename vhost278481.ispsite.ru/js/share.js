import {addModal} from "./modal.js";
import {add} from "./modal.js";
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

let button = document.querySelector(".card-add");

button.addEventListener("click",function(event){
    let tel = document.querySelector("#tel");
    let name = document.querySelector("#name");
    let massage = "Заказ карты";
 if(name.value !== ""){
        name.classList.remove("eror");
        if(!isNaN(Number(tel.value)) && tel.value.length >= 12){
            tel.classList.remove("eror");
            add(tel.value,name.value,massage);
        } else {
            tel.classList.add("eror");
        }
    } else {
        name.classList.add("eror");  
      }
    
});

let cardContainer = document.querySelector(".card-container");
cardContainer.addEventListener("click",function(event){
    if(event.target.tagName !== "IMG") return;
    let target = event.target;
    if(target.classList.contains("start")){
        console.log("OK1");
        target.src = `card/${target.alt}-P.png`;
        target.classList.remove("start");
    } else {
        console.log("OK2");
        target.src = `card/${target.alt}.png`;
        target.classList.add("start");
    }
    
});

let sertificatContainer = document.querySelector(".sertificat-container");
let counterA = 0;
let counterB = 0;
sertificatContainer.addEventListener("click",function(event){
    let target = event.target;
    if(target.tagName !== "IMG") return;
    if(target.parentElement.classList.contains("leftIcon")){
        if(counterA == 0){
            target.src = "podarok/podarok-60.png";
            counterA++;
        } else if(counterA == 1){
            target.src = "podarok/podarok-120.png";
            counterA++;
        } else if(counterA == 2){
            target.src = "podarok/podarok-1.png";
            counterA = 0;
        }
    }
    if(target.parentElement.classList.contains("rightIcon")){
        if(counterB == 0){
            target.src = "podarok/podarok-180.png";
            counterB++;
        } else if(counterB == 1){
            target.src = "podarok/podarok-240.png";
            counterB++;
        } else if(counterB == 2){
            target.src = "podarok/podarok-2.png";
            counterB = 0;
        }
    }
});
let buttonSert = document.querySelector(".sert-add");
buttonSert.addEventListener("click",function(event){
    let tel = document.querySelector("#sertificat-tel");
    let name = document.querySelector("#sertificat-name");
    let minutes = document.querySelector("#sertValue");
    let massage = "Заказ cертификата";
 if(name.value !== ""){
        name.classList.remove("eror");
        if(!isNaN(Number(tel.value)) && tel.value.length >= 12){
            tel.classList.remove("eror");
            if(minutes.value !== ""){
                minutes.classList.remove("eror");
                sertSend(tel.value,name.value,massage,minutes.value);
            } else {
                minutes.classList.add("eror");
            }
            
        } else {
            tel.classList.add("eror");
        }
    } else {
        name.classList.add("eror");  
      }
    
});

 async function sertSend(tel,name,message,minutes){
    const url = '/js/sert.php';
    const data = { usertel: tel, username: name, massage : message, minutes: minutes };
    
    try {
        const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
        'Content-Type': 'application/json'
        }
        });
        let result =  await response.json();
        if(result == 200){
            let oops = document.querySelector(".oops");
            oops.style.display ="none";
            let modal = document.querySelector(".modal");
            modal.style.display ="none";
    
            let result = document.querySelector(".result-container");
            result.style.display ="block";
    
            let ok = document.querySelector(".ok");
            ok.style.display ="flex";
    
        } else {
            throw new Error("Не отправлено")
        }
    } catch (error) {
        console.log('Ошибка:', error);
        let ok = document.querySelector(".ok");
        ok.style.display ="none";
        let modal = document.querySelector(".modal");
        modal.style.display ="none";
    
        let result = document.querySelector(".result-container");
        result.style.display ="block";
    
        let oops = document.querySelector(".oops");
        oops.style.display ="flex";
    }
    
}