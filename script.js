new Swiper(".card-wrapper", {
  loop: true,
  spaceBetween: 30,

  
  autoplay: {
    delay: 2500,
    disableOnInteraction: false, 
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
