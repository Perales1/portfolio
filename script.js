// Hamburger / sidebar
const hamburger = document.querySelector('.hamburger');
const sidebar = document.getElementById('sidebar');
const pageContent = document.getElementById('page-content');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    sidebar.classList.toggle('open');
    pageContent.classList.toggle('shifted');
});

// Carrusel
const track = document.querySelector('.carousel-track');
const frame = document.querySelector('.carousel-frame');
const dots = document.querySelectorAll('.carousel-dots .dot');

if (track && track.children.length > 0) {
    let index = 0;
    const slides = Array.from(track.children);

    function moveToSlide(idx) {
        track.style.transform = `translateX(-${idx * 100}%)`;

        // Ajustar altura del contenedor al tamaño de la imagen activa
        const activeImage = slides[idx];
        frame.style.height = activeImage.offsetHeight + 'px';

        // Actualizar dots
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[idx]) dots[idx].classList.add('active');
    }

    function nextSlide() {
        index = (index + 1) % slides.length;
        moveToSlide(index);
    }

    // Inicializar altura y primer dot
    moveToSlide(index);

    // Cambio automático cada 4s
    setInterval(nextSlide, 4000);

    // Navegación por dots
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            index = i;
            moveToSlide(i);
        });
    });
}
const hamburgerBtn = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');

hamburgerBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'flex';
});

closeMenu.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
});

// También cerrar al clicar un enlace
document.querySelectorAll('.mobile-menu nav a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
    });
});
