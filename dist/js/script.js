"use strict";

const ham = document.querySelector(".ham"),
      closeHam = document.querySelector(".menu__close"),
      menu = document.querySelector(".menu"),
      menuOverlay = document.querySelector(".menu__overlay"),
      productivityPercent = document.querySelectorAll(".rating__wrapper-item-head-percent"),
      productivityLine = document.querySelectorAll(".rating__wrapper-item-body");

ham.addEventListener('click', () => {
    menu.classList.add("active");
});

closeHam.addEventListener('click', (e) => {
    menu.classList.remove("active");
});

menuOverlay.addEventListener('click', (e) => {
    if (e.target == menuOverlay) {
        menu.classList.remove("active");
    }
});

document.body.addEventListener("keydown", (e) => {
    if (menu.classList.contains("active") && e.code == "Escape") {
        menu.classList.remove("active");
    }
});

let arrayPercent = [];

/* Получение информации с div */
// productivityPercent.forEach(item => {
//     let children = item.childNodes;
//     arrayPercent.push(children[children.length - 1].nodeValue.replace(/^\s+/, '').replace(/\s+$/, ''));

//     for (let i = 0; i < arrayPercent.length; i++) {
//         productivityLine[i].style.width = `${arrayPercent[i]}`;
//     }
// });


productivityPercent.forEach((item, i) => {
    productivityLine[i].style.width = item.innerHTML; 
});

