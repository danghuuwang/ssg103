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

function popupToggle1() {
  const popup = document.getElementById('popup1');
  popup.classList.toggle('active');
}

function popupToggle2() {
  const popup = document.getElementById('popup2');
  popup.classList.toggle('active');
}

function popupToggle3() {
  const popup = document.getElementById('popup3');
  popup.classList.toggle('active');
}

function popupToggle4() {
  const popup = document.getElementById('popup4');
  popup.classList.toggle('active');
}

function popupToggle5() {
  const popup = document.getElementById('popup5');
  popup.classList.toggle('active');
}

function popupToggle6() {
  const popup = document.getElementById('popup6');
  popup.classList.toggle('active');
}

function popupToggle7() {
  const popup = document.getElementById('popup7');
  popup.classList.toggle('active');
}