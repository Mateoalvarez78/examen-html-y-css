
addEventListener('DOMContentLoaded', ()=> {
    const btnMenu = document.querySelector('.btn-menu')
    if(btnMenu){
        btnMenu.addEventListener('click', () => {
            const menuItems = document.querySelector('.menu-items')
            menuItems.classList.toggle('show')
            const sectionVideo = document.querySelector('.section')
            sectionVideo.classList.toggle('show')
        })
    }
})  

const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider-section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement("afterbegin", sliderSectionLast);

function moverDerecha(){
    let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
        slider.style.marginLeft = "-100%"
    }, 500); 
}

btnRight.addEventListener("click", function() {
    moverDerecha();
})

function moverIzquierda(){
    let sliderSection = document.querySelectorAll(".slider-section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", sliderSectionLast);
        slider.style.marginLeft = "-100%"
    }, 500); 
}

btnLeft.addEventListener("click", function() {
    moverIzquierda();
})




