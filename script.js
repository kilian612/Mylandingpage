// Mostrar alerta de bienvenida (puedes eliminarla si no la necesitas)
window.addEventListener('load', () => {
  alert("¡Bienvenido a Lindex! Explora nuestros libros destacados 📚");
});

// Scroll suave al hacer clic en enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener('click', function(e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    destino.scrollIntoView({ behavior: 'smooth' });
  });
});

// Añadir animación simple al cargar libros
window.addEventListener('DOMContentLoaded', () => {
  const libros = document.querySelectorAll('.libro');
  libros.forEach((libro, index) => {
    libro.style.opacity = '0';
    setTimeout(() => {
      libro.style.transition = 'opacity 1s ease-in';
      libro.style.opacity = '1';
    }, index * 300);
  });
});

// Evento cuando se hace clic en un libro (puedes personalizar)
document.querySelectorAll('.libro').forEach(libro => {
  libro.addEventListener('click', () => {
    alert('Este libro pronto estará disponible para descargar 🛒');
  });
});
