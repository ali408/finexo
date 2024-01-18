let navBar = document.querySelector(".nav-list");
let mobileBtn = document.querySelector(".mobile-btn");
let closeBtn = document.querySelector(".close");
let openBtn = document.querySelector(".open");

mobileBtn.addEventListener("click", () => {
  if (navBar.classList.contains("open")) {
    navBar.classList.remove("open");
    mobileBtn.classList.remove("active");
    mobileBtn.classList.add("animate");
    setTimeout(() => {
      mobileBtn.classList.remove("animate");
    }, 300);
  } else {
    mobileBtn.classList.add("animate");
    mobileBtn.classList.add("active");
    navBar.classList.add("open");
    mobileBtn.classList.add("animate");
    setTimeout(() => {
      mobileBtn.classList.remove("animate");
    }, 300);
  }
});

const swiper = new Swiper(".first-swiper", {
  // Optional parameters
  loop: true,
  delay: 2000,
  autoplay: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const swiperTwo = new Swiper(".secend-swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  delay: 2000,
  autoplay: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});
