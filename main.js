

// Mostrar bloques con animación al hacer scroll
const blocks = document.querySelectorAll('.info-block');

const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

blocks.forEach(block => fadeInObserver.observe(block));
