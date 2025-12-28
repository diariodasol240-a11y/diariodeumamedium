// ===============================
// ROLAGEM SUAVE PARA ÂNCORAS
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===============================
// ANIMAÇÃO SUAVE AO APARECER NA TELA
// ===============================
const elementos = document.querySelectorAll('section, .hero-text');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('aparecer');
    }
  });
}, {
  threshold: 0.2
});

elementos.forEach(el => observer.observe(el));
