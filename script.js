document.addEventListener("DOMContentLoaded", function () {
  const connectBtn = document.querySelector(".nav__link");
  const burgerBtn = document.querySelector(".nav__burger-btn");
  const exitBtn = document.querySelector(".nav__exit-btn");
  const dropdownMenu = document.querySelector(".dropdown");

  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileConnBtn = document.getElementById("mobile-connect-btn");
  const mobileDropdown = document.querySelector(".mobile-menu__dropdown");

  const arrowImage = connectBtn.querySelector(".nav__arrow");
  const mobileArrowImage = mobileConnBtn.querySelector(".nav__arrow");

  function hideMobileMenu() {
    toggleVisibility(mobileMenu, false);
    toggleVisibility(exitBtn, false);
    toggleVisibility(burgerBtn, true);
    toggleVisibility(mobileDropdown, false);
  }

  function showMobileMenu() {
    toggleVisibility(mobileMenu, true, "flex");
    toggleVisibility(exitBtn, true);
    toggleVisibility(burgerBtn, false);
  }

  function toggleMobileDropdown() {
    toggleVisibility(mobileDropdown);
    mobileArrowImage.classList.toggle("rotate-180");
  }

  function updateView() {
    const isDesktop = window.innerWidth > 1024;
    const isMobileMenuVisible = getComputedStyle(mobileMenu).display === "flex";

    toggleVisibility(burgerBtn, !isDesktop && !isMobileMenuVisible);
    toggleVisibility(exitBtn, !isDesktop && isMobileMenuVisible);
    toggleVisibility(mobileMenu, !isDesktop && isMobileMenuVisible, "flex");

    updateImages(isDesktop ? "desktop" : "mobile");
    updateBackground();
    updateHeading();
  }

  function toggleVisibility(element, isVisible = null, displayStyle = "block") {
    if (isVisible === null) {
      element.style.display =
        getComputedStyle(element).display === "none" ? displayStyle : "none";
    } else {
      element.style.display = isVisible ? displayStyle : "none";
    }
  }

  function updateImages(imageType) {
    updateImageSource(
      ".features-section__image",
      `./images/illustration-editor-${imageType}.svg`
    );
    updateImageSource(
      ".tools-section__image--laptop",
      `./images/illustration-laptop-${imageType}.svg`
    );
  }

  function updateImageSource(selector, path) {
    const image = document.querySelector(selector);
    if (image.src !== path) {
      image.src = path;
    }
  }

  function updateBackground() {
    const imageType = window.innerWidth <= 768 ? "mobile" : "desktop";
    updateImageSource(
      ".header__background",
      `./images/bg-pattern-intro-${imageType}.svg`
    );
  }

  function updateHeading() {
    const h1 = document.querySelector("h1");
    h1.innerHTML =
      window.innerWidth <= 533
        ? "A modern<br>publishing platform"
        : "A modern publishing platform";
  }

  connectBtn.addEventListener("click", function (event) {
    toggleVisibility(dropdownMenu);
    arrowImage.classList.toggle("rotate-180");
  });

  burgerBtn.addEventListener("click", showMobileMenu);
  exitBtn.addEventListener("click", hideMobileMenu);
  mobileConnBtn.addEventListener("click", toggleMobileDropdown);
  window.addEventListener("resize", updateView);

  // Initial update on page load
  updateView();
});
