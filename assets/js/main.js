
// Evento de click no nav menu
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('#header .toggle');

for (const element of toggle) {
  element.addEventListener('click', ()=>{
    nav.classList.toggle('show');
  })
}

// Evento de click no item nav menu
const itemMenu = document.querySelectorAll ('#header .menu li a');
for (const element of itemMenu){
  element.addEventListener('click', ()=>{
    nav.classList.remove('show');
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
  breakpoints: {
    992: {
      slidesPerView: 2,
      setWrapperSize: true
    },
    // 1400: {
    //   slidesPerView: 3,
    //   setWrapperSize: true
    // }
  }
});



