const menuOpenButton = document.querySelector(".header-menu-open-button");
const menuCloseButton = document.querySelector(".navbar-menu-close-button");
const navbarMenu = document.querySelector(".header-navbar");

menuOpenButton.addEventListener("click", function () {
  navbarMenu.classList.add("active");
  document.body.classList.add("scroll-lock");
});

menuCloseButton.addEventListener("click", function () {
  navbarMenu.classList.remove("active");
  document.body.classList.remove("scroll-lock");
});
