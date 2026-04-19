// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Animate bars on reveal
const barIo = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      const fills = e.target.querySelectorAll('[data-w]');
      fills.forEach(f => {
        requestAnimationFrame(() => { f.style.width = f.dataset.w; });
      });
      barIo.unobserve(e.target);
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('.disclosure, .chart').forEach(el => barIo.observe(el));

// Parallax tilt on orbs
document.querySelectorAll('.orb').forEach(el => {
  el.addEventListener('mousemove', (e) => {
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `translateY(-8px) rotateY(${x*8}deg) rotateX(${-y*8}deg)`;
  });
  el.addEventListener('mouseleave', () => {
    el.style.transform = '';
  });
});
