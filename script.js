var connectBtn = document.getElementById("connect-btn");
var dropdownMenu = document.querySelector(".connect-dropdown");
var burgerIcon = document.getElementById("burger-menu");
var mobileMenu = document.querySelector(".mobile-menu");
var mobileConnBtn = document.getElementById('mobile-connect-btn');
var mobileDropdown = document.getElementById('mobile-dropdown');

const arrowImage = connectBtn.querySelector('.arrow');
const mobileArrowImage = mobileConnBtn.querySelector('.arrow');

document.addEventListener("DOMContentLoaded", function() {

    connectBtn.addEventListener("click", function(event) {
        if (dropdownMenu.style.display === "block"){
            dropdownMenu.style.display = "none";
        }
        else{
            dropdownMenu.style.display = "block";
        }
        arrowImage.classList.toggle('rotate-180');
    });

    burgerIcon.addEventListener("click", function(event){
        if (mobileMenu.style.display === "flex"){
            mobileMenu.style.display = "none";
        }
        else{
            mobileMenu.style.display = "flex";
        }
    });

    mobileConnBtn.addEventListener('click', function(event){
        if (mobileDropdown.style.display === "block"){
            mobileDropdown.style.display = "none";
        }
        else{
            mobileDropdown.style.display = "block";
        }
        mobileArrowImage.classList.toggle('rotate-180');
    });
});

window.addEventListener('resize', function(){
    var windowWidth = window.innerWidth;

    if (windowWidth >= 1000) {
        mobileMenu.style.display = "none";
        mobileDropdown.style.display = "none";
    }
})