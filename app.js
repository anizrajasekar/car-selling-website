let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


document.querySelector('#login-btn').onclick = () =>{
   document.querySelector('.login-form-container').classList.add('active');
}

document.querySelector('#close-login-form').onclick = () =>{
   document.querySelector('.login-form-container').classList.remove('active');
}


var swiper = new Swiper(".vehicles-slider", {
   slidesPerView: 1,
   spaceBetween: 20,
   grapCursor:true,
   loop:true,
   centeredSlides:true,
   autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   breakpoints: {
     0: {
       slidesPerView: 1,
     
     },
     768: {
       slidesPerView: 2,
      
     },
     991: {
       slidesPerView: 3,
     
     },
   },
 });

 var swiper = new Swiper(".featured-slider", {
  slidesPerView: 1,
  spaceBetween: 40,
  grapCursor:true,
  loop:true,
  autoplay: {
     delay: 9500,
     disableOnInteraction: false,
   },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    
    },
    768: {
      slidesPerView: 2,
     
    },
    991: {
      slidesPerView: 3,
   },
  },
});

var swiper = new Swiper(".review-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  grapCursor:true,
  loop:true,
  centeredSlides:true,
  autoplay: {
     delay: 9500,
     disableOnInteraction: false,
   },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    
    },
    768: {
      slidesPerView: 2,
     
    },
    991: {
      slidesPerView: 3,
    
    },
  },
});

let header = document.querySelector('.header');

window.addEventListener('scroll', () => {
     header.classList.toggle('shadow', window.scrollY > 0);
});




