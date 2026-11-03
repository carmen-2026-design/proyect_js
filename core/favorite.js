import { getFavoritesFromLocalStorage } from "../utils/localStorage.js";
import { createFavoriteCard } from "../ui/renderer.js";

function loadFavorites(){
    const favorites = getFavoritesFromLocalStorage(); // Array con los objetos guardados en el localStorage

    const container = document.getElementById("favorite-section");

    favorites.forEach(character => {
        const card = createFavoriteCard(character, (c,isFavorite) => {
            if (!isFavorite){
                card.remove();
            }
        });
        container.appendChild(card);
    })
}

loadFavorites();