

class WeeSlider extends HTMLElement {
    constructor() {
      super();
      this.loopSlides = this.dataset.loop === 'true';
      this.slides = [...this.querySelectorAll('.wee-slider__slide')];
      this.navDots = [...this.querySelectorAll('.wee-slider__navdot')];
      this.buttons = [...this.querySelectorAll('.wee-slider__buttons button')];
      this.handleButtonClick = this.handleButtonClick.bind(this);
      this.buttons.forEach(button => button.addEventListener('click', this.handleButtonClick));
      this.navDots.forEach((navDot, index) => navDot.addEventListener('click', () => {
        this.handleSlideChange(index);
      }));
  
      const observer = new IntersectionObserver(entries => {
        entries.forEach(({ target, isIntersecting }) => {
          const slideIndex = this.slides.indexOf(target);
          target.classList.toggle('visible', isIntersecting);
          this.navDots[slideIndex].classList.toggle('visible', isIntersecting);
          if (!this.loopSlides) this.handleSlideButtonActive();
        });
      }, { threshold: 0.9 });
      this.slides.forEach(slide => observer.observe(slide));
      this.classList.add('loaded');
    }
  
    handleButtonClick(event) {
      const { classList } = event.currentTarget;
      const isNext = classList.contains('wee-slider__button-next');
      const modifier = isNext ? 1 : -1;
      const condition = slide => slide.classList.contains('visible');
      let index = isNext ? this.slides.findLastIndex(condition) : this.slides.findIndex(condition);
      index = index !== -1 ? index + modifier : (isNext ? 0 : this.slides.length - 1);
      if (this.loopSlides) index = (index + this.slides.length) % this.slides.length;
      this.handleSlideChange(index);
    }
  
    handleSlideChange(index) {
      this.slides.forEach((slide, i) => {
        if (i === index) slide.scrollIntoView();
      });
      this.navDots.forEach((navDot, i) => {
        navDot.classList.toggle('active', i === index);
      });
    }
  
    handleSlideButtonActive() {
      this.buttons.forEach(button => {
        const isNext = button.classList.contains('wee-slider__button-next');
        const slide = isNext ? this.slides[this.slides.length - 1] : this.slides[0]
        button.disabled = slide.classList.contains('visible');
      });
    }
  }
  
  customElements.define('wee-slider', WeeSlider);
  
  
  var quantityInput = document.getElementById("itemNum");
    var subButton = document.getElementById("sub");
    var addButton = document.getElementById("add");
  
    subButton.addEventListener("click", function() {
      var currentValue = parseInt(quantityInput.value);
      if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
        
      }
     
    });
  
    addButton.addEventListener("click", function() {
      var currentValue = parseInt(quantityInput.value);
      if (currentValue < 999) {
        quantityInput.value = currentValue + 1;
      }
    });
  
  
  
  
    
    /*var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4, // Ekranda aynı anda görüntülenen slayt sayısı
        spaceBetween: 10, // Slaytlar arasındaki boşluk
        loop: true, // Slaytları döngüsel olarak gösterir
        autoplay: {
          delay: 2000, // Slayt geçiş hızı (ms cinsinden)
        },
        navigation: {
          nextEl: ".swiper
*/
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4, // Ekranda aynı anda görüntülenen slayt sayısı
        spaceBetween: 10, // Slaytlar arasındaki boşluk
        loop: true, // Slaytları döngüsel olarak gösterir
        autoplay: {
          delay: 100, // Slayt geçiş hızı (ms cinsinden)
        },
        navigation: {
          nextEl: ".swiper-button-next", // İleri düğmesi için kullanılan sınıf veya öğe seçici
          prevEl: ".swiper-button-prev", // Geri düğmesi için kullanılan sınıf veya öğe seçici
        },
      });


      var getTranslate;
      var slideWidth;

      var mySwiper = new Swiper('.slider .swiper', {
          speed: 2000,
    // ▼画像サイズに合わせて数値変更する
          slidesPerView: 3,
          loop: true,
          freeMode: true,
          freeModeMomentum: false,
          centeredSlides: true,
          autoplay: {
              delay: 0,
              disableOnInteraction: false,
          }
      })




      document.querySelector('.IconLeft .fa-sharp').addEventListener('click', function () {
        document.querySelector('.vertical-header').style.display = 'flex';
      });
      document.querySelector('.vertical-header .fa-xmark').addEventListener('click', function () {
        document.querySelector('.vertical-header').style.display = 'none';
      });  
     
      

      var container = document.querySelector('.image-container');
container.addEventListener('mouseover', function(event) {
  var modal = event.currentTarget.querySelector('.modal');
  modal.style.display = 'block';
});

// Add an event listener to close the modal when mouse leaves the container
container.addEventListener('mouseleave', function(event) {
  var modal = event.currentTarget.querySelector('.modal');
  modal.style.display = 'none';
});

