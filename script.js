var connectBtn = document.getElementById("connect-btn");
var dropdownMenu = document.querySelector(".connect-dropdown");
var burgerIcon = document.getElementById("burger-menu");
var mobileMenu = document.querySelector(".mobile-menu");

const arrowImage = connectBtn.querySelector('.arrow');

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
});