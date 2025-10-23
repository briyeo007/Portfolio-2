// Mobile nav toggle
(function(){
  const navToggle = document.getElementById('navToggle');
  const navList = document.getElementById('navList');
  if (!navToggle || !navList) return;
  const toggle = () => navList.classList.toggle('open');
  navToggle.addEventListener('click', toggle);
  navToggle.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') toggle();
  });
})();

// Generic slider controller (card + testimonial)
function makeDotsController(sliderId, dotsId){
  const slider = document.getElementById(sliderId);
  const dots = Array.from(document.querySelectorAll(`#${dotsId} .dot`));
  if (!slider || dots.length === 0) return;

  const items = Array.from(slider.children);
  const setActive = i => {
    dots.forEach(d => d.classList.remove('active'));
    dots[i].classList.add('active');
  };
  const goTo = i => {
    slider.style.animation = 'none';
    slider.style.transform = `translateX(${-items[i].offsetLeft}px)`;
    setActive(i);
  };

  dots.forEach((d, i) => {
    d.addEventListener('click', () => goTo(i));
    d.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') goTo(i);
    });
  });

  window.addEventListener('resize', () => {
    const i = dots.findIndex(d => d.classList.contains('active'));
    if (i >= 0 && slider.style.animation === 'none') goTo(i);
  });
}

makeDotsController('cardSlider', 'cardDots');
makeDotsController('testiSlider', 'testiDots');
