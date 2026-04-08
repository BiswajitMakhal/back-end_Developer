/* ---- Loader ---- */
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    loader.classList.add('hide');
    setTimeout(() => loader.style.display = 'none', 800);
  }, 2400);
});

/* ---- Custom Cursor ---- */
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});
(function animRing() {
  rx += (mx - rx) * 0.15;
  ry += (my - ry) * 0.15;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animRing);
})();

/* ---- Scroll Reveal ---- */
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => io.observe(el));

/* ---- Scroll Top Button ---- */
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) scrollTopBtn.classList.add('show');
  else scrollTopBtn.classList.remove('show');
});

/* ---- Mobile Nav ---- */
const hamburger  = document.getElementById('hamburger');
const navDrawer  = document.getElementById('navDrawer');
const drawerClose= document.getElementById('drawerClose');

hamburger.addEventListener('click', () => navDrawer.classList.add('open'));
drawerClose.addEventListener('click', () => navDrawer.classList.remove('open'));
function closeDrawer() { navDrawer.classList.remove('open'); }

/* ---- Active nav link on scroll ---- */
const sections = document.querySelectorAll('section[id]');
const navAs    = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) cur = s.id;
  });
  navAs.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + cur ? 'var(--green)' : '';
  });
});

/* ---- Reveal stagger delay ---- */
document.querySelectorAll('.skills-grid .skill-category, .projects-grid .project-card').forEach((el, i) => {
  el.style.transitionDelay = (i * 0.08) + 's';
});