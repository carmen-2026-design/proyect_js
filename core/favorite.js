import { getFavoritesFromLocalStorage } from "../utils/localStorage.js";
import { createFavoriteCard } from "../ui/renderer.js";

function loadFavorites(){
    const favorites = getFavoritesFromLocalStorage(); // Array con los objetos guardados en el localStorage

    const container = document.getElementById("favorite-section");

    favorites.forEach(function (character) {
        const card = createFavoriteCard(character, true);
        container.appendChild(card);

    });
}

loadFavorites();