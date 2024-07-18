var connectBtn = document.getElementById("connect-btn");
var dropdownMenu = document.querySelector(".connect-dropdown");
var burgerIcon = document.getElementById("burger-menu");
var exitIcon = document.getElementById("exit-btn");
var mobileMenu = document.querySelector(".mobile-menu");
var mobileConnBtn = document.getElementById('mobile-connect-btn');
var mobileDropdown = document.getElementById('mobile-dropdown');
var mobileNavList = document.getElementById("mobile-nav-list");
var mobileSignList = document.getElementById("mobile-sign-list");
const arrowImage = connectBtn.querySelector('.arrow');
const mobileArrowImage = mobileConnBtn.querySelector('.arrow');


function hideMobileMenu() {
    mobileMenu.style.display = "none";
    exitIcon.style.display = "none";
    burgerIcon.style.display = "block";
    mobileDropdown.style.display = "none";
}

function showMobileMenu() {
    mobileMenu.style.display = "flex";
    exitIcon.style.display = "block";
    burgerIcon.style.display = "none";
}

function toggleMobileDropdown() {
    if (mobileDropdown.style.display === "block") {
        mobileDropdown.style.display = "none";
    } else {
        mobileDropdown.style.display = "block";
    }
    mobileArrowImage.classList.toggle('rotate-180');
}

function updateView() {
    var windowWidth = window.innerWidth;
    if (windowWidth > 1200) {
        burgerIcon.style.display = "none";
        exitIcon.style.display = "none";
        mobileMenu.style.display = "none";
        mobileDropdown.style.display = "none";
    } else {
        if (mobileMenu.style.display === "flex") {
            burgerIcon.style.display = "none";
            exitIcon.style.display = "block";
        } else {
            burgerIcon.style.display = "block";
            exitIcon.style.display = "none";
        }
        updateImages();
    }
}

function updateImages() {
    var editorImage = document.getElementById("editor-img");
    var laptopImage = document.getElementById("laptop-pic");

    var editorImagePath = "./images/illustration-editor-mobile.svg";
    var laptopImagePath = "./images/illustration-laptop-mobile.svg";
        
    editorImage.src = editorImagePath;
    laptopImage.src = laptopImagePath;
}

document.addEventListener("DOMContentLoaded", function () {
    connectBtn.addEventListener("click", function (event) {
        dropdownMenu.style.display = (dropdownMenu.style.display === "block") ? "none" : "block";
        arrowImage.classList.toggle('rotate-180');
    });

    burgerIcon.addEventListener("click", showMobileMenu);
    exitIcon.addEventListener("click", hideMobileMenu);
    mobileConnBtn.addEventListener('click', toggleMobileDropdown);

    updateView();
});

window.addEventListener('resize', updateView);
