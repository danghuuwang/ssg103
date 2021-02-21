$('.cd100').countdown100({
    endtimeYear: 2021,
    endtimeMonth: 3,
    endtimeDate: 8,
    endtimeHours: 19,
    endtimeMinutes: 0,
    endtimeSeconds: 0,
    timeZone: "Asia/Ho_Chi_Minh" 
});

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: false,
    },
    pagination: {
      el: '.swiper-pagination',
    },
});