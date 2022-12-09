  export function addMenu(){
    
let menu = document.querySelector(".menu");
let menuOpen = document.querySelector(".menuOpen");

menu.addEventListener("pointerdown",function(event){
    menuOpen.style.display = "flex";
    showBlock();
    let close = menuOpen.querySelector(".menuClose");
    close.addEventListener("pointerup", function(event){
        menuOpen.style.display = "none";
        menuOpen.classList.remove("open");
        document.body.style.overflow = "auto";
    })
});

function showBlock() {
    menuOpen.classList.add('open');
  }
 }