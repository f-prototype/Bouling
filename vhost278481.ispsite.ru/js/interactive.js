export function interactiveSlider(slider){
    let btnR = slider.querySelector(".button-right");
    let btnL = slider.querySelector(".button-left");
    let sliderInner = slider.querySelector(".slider_inner");
    let slides = sliderInner.querySelectorAll(".slider-elem");
    let translate = 0;
    let count = 0;
    btnR.onclick = function(){
        sliderInner.style.transform = `translateX(-${translate + 100}%)`;
        translate+=100;
        count++;
        btnL.style.display = "flex";
        if(count >= slides.length - 1){
            btnR.style.display = "none";
        }
    }

    btnL.onclick = function(){
        sliderInner.style.transform = `translateX(-${translate - 100}%)`;
        translate-=100;
        count--;
        btnR.style.display = "flex";
        btnR.style.justifyContent = "center"
        if(count <= 0){
            btnL.style.display = "none";
        }
    }
}
