const swiper = new Swiper('.mySwiper', {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    }
  }
});




const videoSwiper = new Swiper('.videoSwiper', {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next-custom',
    prevEl: '.swiper-button-prev-custom',
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    576: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    992: {
      slidesPerView: 4
    }
  }
});



document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const faqItem = button.parentElement;

    faqItem.classList.toggle("active");
  });
});


document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('data-target');
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }

    // Offcanvas ni yopish
    const offcanvasEl = document.querySelector('.offcanvas.show');
    if (offcanvasEl) {
      const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
      offcanvas.hide();
    }
  });
});




  document.querySelectorAll('.video-thumb').forEach(thumb => {
    thumb.addEventListener('click', function () {
      const videoId = this.dataset.videoId;
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen";
      iframe.setAttribute('allowfullscreen', '');
      iframe.classList.add('rounded');

      this.innerHTML = ''; // remove image and icon
      this.appendChild(iframe);
    });
  });
