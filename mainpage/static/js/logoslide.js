
      const swiper = new Swiper(".swiper", {
        loop: true,
        loopAdditionalSlides: 1,
        slidesPerView: 5,
        autoplay: true,
        mousewheel: true,
        speed: 300,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        scrollbar: {
          el: ".swiper-scrollbar",
        },
      });
