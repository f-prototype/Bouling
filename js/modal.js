export function addModal(){
const modal = document.getElementById("myModal");

const btnModal = document.getElementById("myBtn");

const span = document.querySelector(".close");

const modalContent = document.querySelector(".modal-content");

btnModal.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const modalBtnAdd = document.querySelector(".modal-btn");

modalBtnAdd.onclick = function(){
    let modalTel = document.querySelector(".modal-tel");
    let modalName = document.querySelector(".modal-name");
    if(isNaN(Number(modalTel.value)) || modalTel.value.length < 11){
        modalTel.classList.add("eror");
    } else if(modalName.value == "") {
        modalTel.classList.remove("eror");
        add(modalTel.value)
    } else {
        modalTel.classList.remove("eror");
        add(modalTel.value, modalName.value);
    }
}
}

 export async function add(tel,name="anonim",massage="Обратный звонок"){
const url = '/js/test.php';
const data = { usertel: tel, username: name, massage : massage };

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