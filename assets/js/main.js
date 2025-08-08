const swiper = new Swiper('.mySwiper', {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    576: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    992: { slidesPerView: 4 }
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
    0: { slidesPerView: 1 },
    576: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    992: { slidesPerView: 4 }
  }
});

document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const faqItem = button.parentElement;
    faqItem.classList.toggle("active");
  });
});

document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('data-target');
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }

    const offcanvasEl = document.querySelector('.offcanvas.show');
    if (offcanvasEl) {
      const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
      offcanvas.hide();
    }
  });
});

// 🟡 Muammo bo'lgan joyni to'g'irladik
const allThumbs = document.querySelectorAll('.video-thumb');
let currentIframe = null;

allThumbs.forEach(thumb => {
  const url = thumb.dataset.videoUrl;
  let videoId = '';

  if (url.includes('/shorts/')) videoId = url.split('/shorts/')[1].split('?')[0];
  else if (url.includes('watch?v=')) videoId = url.split('watch?v=')[1].split('&')[0];
  else if (url.includes('youtu.be/')) videoId = url.split('youtu.be/')[1].split('?')[0];

  thumb.dataset.videoId = videoId;

  const img = document.createElement('img');
  img.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  img.alt = 'video';
  img.className = 'img-fluid rounded';
  thumb.insertBefore(img, thumb.querySelector('.play-icon'));

  // Save original HTML
  thumb.dataset.original = thumb.innerHTML;

  thumb.addEventListener('click', () => {
    if (currentIframe) {
      currentIframe.parentElement.innerHTML = currentIframe.parentElement.dataset.original;
      currentIframe = null;
    }

    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.style.borderRadius = '12px';

    thumb.innerHTML = '';
    thumb.appendChild(iframe);
    currentIframe = iframe;
  });
});
