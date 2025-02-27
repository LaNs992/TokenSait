const mobile = document.querySelectorAll(".header__text");

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

gsap.registerPlugin(ScrollTrigger);

gsap.defaults({
  ease: "power2.out",
  duration: 0.5,
});

gsap.from(".container__header > * > *", {
  opacity: 0,
  scale: 1.05,
  stagger: {
    each: 0.1,
  },
});

gsap.from(".hero-image ", {
  x: 300, // Вылетает с правой стороны
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});
gsap.from(".hero-text ", {
  x: -300, // Вылетает с правой стороны
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});
let solTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#usteam",
    start: "top 40%",
    end: "bottom bottom",
  },
});

solTl
  .from(".block__r--main", { opacity: 0, scale: 1.05, stagger: { each: 0.1 } })
  .from(".block__r--low", { opacity: 0, scale: 1.05, stagger: { each: 0.1 } })
  .from(".block__r--text", { opacity: 0, scale: 1.05, stagger: { each: 0.1 } });

let findTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".find",
    start: "top 40%",
    end: "bottom bottom",
  },
});

findTl
  .from(".find__title", { opacity: 0, scale: 1.05, stagger: { each: 0.1 } })
  .from(".find__subtitle", { opacity: 0, scale: 1.05, stagger: { each: 0.1 } })
  .from(".find__btn", { opacity: 0, scale: 1.05, stagger: { each: 0.1 } });

let caseTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".container__coming",
    start: "top 40%",
    end: "bottom bottom",
  },
});
let flipped = false;

caseTL.from(".list__txt ", {
  opacity: 0,
  scale: 1.05,
  stagger: { each: 0.1 },
});

let intTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".token__main",
    start: "top 40%",
    end: "bottom bottom",
  },
});

intTL.from(".token__text , .token__main", {
  opacity: 0,
  scale: 1.05,
  stagger: { each: 0.1 },
});

intTL.from(".int__item", {
  opacity: 0,
  scale: 1.05,
  stagger: { each: 0.1 },
});

let techTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".block__maz, .cardsb",
    start: "top 40%",
    end: "bottom bottom",
  },
});

techTL
  .from(".tech__left > *", { opacity: 0, scale: 1.05, stagger: { each: 0.1 } })
  .from(".tech__right > *", {
    opacity: 0,
    scale: 1.05,
    stagger: { each: 0.1 },
  })
  .from(".maz__card, .cardsb", {
    opacity: 0,
    scale: 1.05,
    stagger: { each: 0.1 },
  });

let footerTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".footer",
    start: "top 40%",
    end: "bottom bottom",
  },
});

footerTl
  .from(".footer__title", { opacity: 0, scale: 1.05, stagger: { each: 0.1 } })
  .from(".footer__subtitle", {
    opacity: 0,
    scale: 1.05,
    stagger: { each: 0.1 },
  });
