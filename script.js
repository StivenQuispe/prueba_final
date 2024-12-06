const swiper = new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 1, // Por defecto, mostrar solo un slide
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  breakpoints: {
      0: {
          slidesPerView: 1, // Una carta por vez en pantallas pequeñas
          spaceBetween: 5,
      },
      600: {
          slidesPerView: 2, // Dos cartas por vez en pantallas medianas
          spaceBetween: 10,
      },
      1024: {
          slidesPerView: 3, // Tres cartas por vez en pantallas grandes
          spaceBetween: 20,
      }
  }
});
