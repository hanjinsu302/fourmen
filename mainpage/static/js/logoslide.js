
      const swiper = new Swiper(".swiper", {
        loop: true,
        slidesPerView: 16,
        autoplay: true,
        mousewheel: true,
        speed: 500,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        scrollbar: {
          el: ".swiper-scrollbar",
        },
      });
