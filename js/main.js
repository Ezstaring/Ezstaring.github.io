// Validación del formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Por favor, completa todos los campos.');
    return;
  }

  alert('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.');
  this.reset();
});

// Scroll suave para los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      console.error('El elemento objetivo no se encontró:', this.getAttribute('href'));
    }
  });
});

// Animaciones al hacer scroll
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate'); // Agrega la clase animate para animar
        observer.unobserve(entry.target); // Deja de observar el elemento una vez que es visible
      }
    });
  },
  {
    threshold: 0.1, // Se activa cuando el 10% del elemento es visible
  }
);

// Observar elementos con animaciones
document.querySelectorAll('.skill-item, .service-card').forEach(item => {
  observer.observe(item);
});

// Manejo de errores en caso de que no existan elementos
if (!document.querySelectorAll('.skill-item, .service-card').length) {
  console.warn('No se encontraron elementos para observar.');
}