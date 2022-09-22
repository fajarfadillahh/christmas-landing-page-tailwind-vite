import "../scss/index.scss";

// ===== SHOW MENU =====
function showMenu(menuId, toggleId, closeId) {
  const menu = document.getElementById(menuId);
  const toggle = document.getElementById(toggleId);
  const close = document.getElementById(closeId);

  if (menu && toggle && close) {
    toggle.onclick = () => {
      menu.classList.add("show-menu");
    };

    close.onclick = () => {
      menu.classList.remove("show-menu");
    };
  }
}
showMenu("header-menu", "header-toggle", "header-close");

// ===== STICKY HEADER =====
const scrollY = window.pageYOffset;

function stickyHeader() {
  const header = document.getElementById("header");

  this.scrollY > 5
    ? header.classList.add("sticky-action")
    : header.classList.remove("sticky-action");
}
window.addEventListener("scroll", stickyHeader);

// ===== SWIPER NEW SECTION =====
let newSwiper = new Swiper(".new-swiper", {
  spaceBetween: 24,
  loop: "true",
  slidesPerView: "auto",
  centeredSlides: true,

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    992: {
      spaceBetween: 80,
    },
  },
});
