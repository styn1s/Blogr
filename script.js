var connectBtn = document.querySelector(".nav__link");
var burgerBtn = document.querySelector(".nav__burger-btn");
var exitBtn = document.querySelector(".nav__exit-btn");
var dropdownMenu = document.querySelector(".dropdown");

var mobileMenu = document.querySelector(".mobile-menu");
var mobileNavList = document.querySelector(".mobile-menu__nav-list");
var mobileConnBtn = document.getElementById("mobile-connect-btn");
var mobileDropdown = document.querySelector(".mobile-menu__dropdown");
var mobileSignList = document.getElementById("mobile-sign-list");

const arrowImage = connectBtn.querySelector(".nav__arrow");
const mobileArrowImage = mobileConnBtn.querySelector(".nav__arrow");

function hideMobileMenu() {
  mobileMenu.style.display = "none";
  exitBtn.style.display = "none";
  burgerBtn.style.display = "block";
  mobileDropdown.style.display = "none";
}

function showMobileMenu() {
  mobileMenu.style.display = "flex";
  exitBtn.style.display = "block";
  burgerBtn.style.display = "none";
}

function toggleMobileDropdown() {
  if (mobileDropdown.style.display === "block") {
    mobileDropdown.style.display = "none";
  } else {
    mobileDropdown.style.display = "block";
  }
  mobileArrowImage.classList.toggle("rotate-180");
}

function updateView() {
  var windowWidth = window.innerWidth;
  if (windowWidth > 1024) {
    burgerBtn.style.display = "none";
    exitBtn.style.display = "none";
    mobileMenu.style.display = "none";
    mobileDropdown.style.display = "none";

    updateImages("desktop");
  } else {
    if (mobileMenu.style.display === "flex") {
      burgerBtn.style.display = "none";
      exitBtn.style.display = "block";
    } else {
      burgerBtn.style.display = "block";
      exitBtn.style.display = "none";
    }
    updateImages("mobile");
    updateBackground();
  }
  updateHeading();
}

function updateImages(imageType) {
  var editorImage = document.querySelector(".features-section__image");
  var laptopImage = document.querySelector(".tools-section__image--laptop");
  var editorImagePath = `./images/illustration-editor-${imageType}.svg`;
  var laptopImagePath = `./images/illustration-laptop-${imageType}.svg`;
  editorImage.src = editorImagePath;
  laptopImage.src = laptopImagePath;
}

function updateBackground() {
  var windowWidth = window.innerWidth;
  var introImage = document.querySelector(".header__background");

  var imageType = windowWidth <= 768 ? "mobile" : "desktop";
  var introImagePath = `./images/bg-pattern-intro-${imageType}.svg`;
  introImage.src = introImagePath;
}

function updateHeading() {
  const h1 = document.querySelector("h1");
  if (window.innerWidth <= 533) {
    h1.innerHTML = "A modern<br>publishing platform";
  } else {
    h1.innerHTML = "A modern publishing platform";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  updateView();
  updateHeading();
  connectBtn.addEventListener("click", function (event) {
    dropdownMenu.style.display =
      dropdownMenu.style.display === "block" ? "none" : "block";
    arrowImage.classList.toggle("rotate-180");
  });
  burgerBtn.addEventListener("click", showMobileMenu);
  exitBtn.addEventListener("click", hideMobileMenu);
  mobileConnBtn.addEventListener("click", toggleMobileDropdown);
  window.addEventListener("resize", updateView);
});
