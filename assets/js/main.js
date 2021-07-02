
// Evento de click no nav menu
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('#header .toggle');

for (const element of toggle) {
  element.addEventListener('click', ()=>{
    nav.classList.toggle('show');
  })
}

// Swiper - Testimonials
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 24,
  mousewheel: true,
  keyboard: true,
  pagination: {
    el: '.swiper-pagination'
  },
});



