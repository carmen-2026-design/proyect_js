// Menú hamburguesa
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {

    navMenu.classList.toggle('active');

    // Actualizar icono
    const icon = menuToggle.querySelector('i');

    if (navMenu.classList.contains('active')) {
        icon.classList.replace('fa-bars', 'fa-xmark');
        menuToggle.setAttribute('aria-expanded', 'true');
        menuToggle.setAttribute('aria-label', 'Cerrar menú');
    } else {
        icon.classList.replace('fa-xmark', 'fa-bars');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Abrir menú');
    }
});