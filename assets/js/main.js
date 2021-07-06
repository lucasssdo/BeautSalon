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
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

// Ativar back to top ao passar da sessão home
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('active')
  } else {
    backToTopButton.classList.remove('active')
  }
}

// Event Scroll
window.addEventListener('scroll', ()=>{
  changeHeaderWhenScroll()
  backToTop()
})

// Scroll Reveal
const scrollRevealTop = {
  origin: 'top',
  distance: '24px',
  duration: 600,
  opacity : null,
  reset: true,
}

const scrollRevealBottom = {
  origin: 'bottom',
  distance: '50px',
  duration: 350,
  opacity : null,
  reset: true,
}

  ScrollReveal().reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services .text, #services .cards,
    #testimonials .title, #testimonials .swiper-container,
    #contact .column-1, #contact .column-2`, scrollRevealTop);

  ScrollReveal().reveal( `#footer .text, #footer .icons-social`, scrollRevealBottom)


// Swiper - Testimonials
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 20,
  setWrapperSize: true,
  mousewheel: true,
  keyboard: true,
  pagination: {
    el: '.swiper-pagination'
  },
  breakpoints: {

    768: {
      slidesPerView: 1,
      setWrapperSize: true,
      spaceBetween: 20,
    },

    992: {
      slidesPerView: 2,
      setWrapperSize: true,
      spaceBetween: 20,
    },

    1024: {
      slidesPerView: 2,
      setWrapperSize: true,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 2,
      setWrapperSize: true,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 2,
      setWrapperSize: true,
      spaceBetween: 20,
    }
  }
});







