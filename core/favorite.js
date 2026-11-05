import { getFavoritesFromLocalStorage } from "../utils/localStorage.js";
import { createCharacterCard } from "../ui/renderer.js";

function loadFavorites(){
    const favorites = getFavoritesFromLocalStorage(); // Array con los objetos guardados en el localStorage

    const container = document.getElementById("catalog-section");

    favorites.forEach(character => {
        const card = createCharacterCard(character, (c,isFavorite) => {
            if (!isFavorite){
                card.remove();
            }
        });
        container.appendChild(card);
    })
}

function initMenu() {

    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', () => {

        navMenu.classList.toggle('active');

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
}

initMenu();
loadFavorites();