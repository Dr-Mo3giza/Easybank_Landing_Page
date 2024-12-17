// Mobile Menu Toggling
let menuToggler = document.querySelector(".menu-toggler");
let burgerIcon = document.querySelector(".burger-icon");
let closeIcon = document.querySelector(".close-icon");
let menuOverlay = document.querySelector(".overlay");
let menu = document.querySelector(".mobile-menu");

menuToggler.addEventListener("click", () => {
  burgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
  menuOverlay.classList.toggle("hidden");
  menu.classList.toggle("hidden");
});
