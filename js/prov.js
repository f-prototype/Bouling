export async  function provAdd(text){
    let Tel = document.querySelector(".tel");
    let Name = document.querySelector(".name");
    let Amout = document.querySelector(".amout");
    let date1 = document.querySelector(".datetime");
    const url = '/js//form.php';
        if(Name.value !== ""){
        Name.classList.remove("eror");
        if(!isNaN(Number(Tel.value)) && Tel.value.length >= 11){
            Tel.classList.remove("eror");
            if(date1.value !== ""){
                date1.classList.remove("eror");   
                if(Number(Amout.value) <= Amout.max && Amout.value !== ""){
                    Amout.classList.remove("eror");
                try {
                    const data = { usertel: Tel.value, username: Name.value, useramout: Amout.value, userdate: date1.value, usertext:text};
                    const response = await fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                    'Content-Type': 'application/json'
                    }
                    });
                    let answer =  await response.json();
                    if(answer == 200){
                        console.log("OK");
                        let oops = document.querySelector(".oops");
                        oops.style.display ="none";
                         let result = document.querySelector(".result-container");
                        result.style.display ="block";

                        let ok = document.querySelector(".ok");
                        ok.style.display ="flex";
                    } else {
                        throw new Error("Не отправлено");
                    }
                } catch (error) {
                    console.log('Ошибка:', error);
                    let ok = document.querySelector(".ok");
                    ok.style.display ="none";
                    let result = document.querySelector(".result-container");
                    result.style.display ="block";

                    let oops = document.querySelector(".oops");
                    oops.style.display ="flex";
                }
            } else {
                Amout.classList.add("eror")
                
            }
    
            } else {
                date1.classList.add("eror");
            }
        } else {
            Tel.classList.add("eror");
        }
    } else {
        Name.classList.add("eror");
    }
}