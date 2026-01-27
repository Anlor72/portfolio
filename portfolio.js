// Marca el documento como "con JS"
document.documentElement.classList.add('js');

// Año dinámico
document.getElementById('year').textContent = new Date().getFullYear();

// WhatsApp
const openWA = () => {
  const phone = '584124737869';
  const msg = encodeURIComponent('Hola Anlor, vi tu portfolio y quiero hablar de un proyecto.');
  window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
};
document.getElementById('btnContact')?.addEventListener('click', openWA);

// Animaciones al hacer scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
