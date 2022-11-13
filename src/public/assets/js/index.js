const navbar = document.querySelector(".navbar");
const nav = document.querySelector("nav");

const navLinks = document.querySelector(".nav-links");
const menuOpenBtn = document.querySelector(".navbar .bx-menu");
const menuCloseBtn = document.querySelector(".nav-links .bx-x");
const extraArrow = document.querySelector(".extra-arrow");
const moreArrow = document.querySelector(".more-arrow");

window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
        nav.classList.add('nav-active');
    } else {
        nav.classList.remove('nav-active');
    }
});



menuOpenBtn.onclick = function () {
    navLinks.style.left = "0";
};
menuCloseBtn.onclick = function () {
    navLinks.style.left = "-100%";
};

extraArrow.onclick = function () {
    navLinks.classList.toggle("show1");
};
moreArrow.onclick = function () {
    navLinks.classList.toggle("show2");
};

