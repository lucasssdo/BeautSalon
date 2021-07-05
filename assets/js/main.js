
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

// Ativar shadow com scroll da pagina
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
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
    /* 1400: {
      slidesPerView: 3,
      setWrapperSize: true
    } */
  }
});

// Event Scroll
window.addEventListener('scroll', ()=>{
  changeHeaderWhenScroll()
})




