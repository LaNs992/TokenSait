var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const closeMenu = document.querySelector(".close-menu");
  const mobileMenu = document.querySelector(".mobile-menu");

  menuToggle.addEventListener("click", () => {
    mobileMenu.style.right = "0";
  });

  closeMenu.addEventListener("click", () => {
    mobileMenu.style.right = "-250px";
  });
});
