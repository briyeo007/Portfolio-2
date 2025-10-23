// LandingPage.js

(function () {
  const slider = document.getElementById('slider');
  const dots = Array.from(document.querySelectorAll('#slider-dots .dot'));
  const slides = Array.from(slider.children);

  function setActiveDot(i) {
    dots.forEach(d => d.classList.remove('active'));
    dots[i].classList.add('active');
  }

  function goTo(index) {
    slider.style.animation = 'none';
    const target = slides[index];
    const offset = target.offsetLeft;
    slider.style.transform = `translateX(${-offset}px)`;
    setActiveDot(index);
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => goTo(Number(dot.dataset.index)));
    dot.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') goTo(Number(dot.dataset.index));
    });
  });

  window.addEventListener('resize', () => {
    const activeIdx = dots.findIndex(d => d.classList.contains('active'));
    if (activeIdx >= 0 && slider.style.animation === 'none') {
      goTo(activeIdx);
    }
  });
})();
