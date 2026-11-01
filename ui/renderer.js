import { isInFavorites, toggleFavorites } from "../utils/localStorage.js";

function createCharacterCard(character){
    //Datos del personaje
    const {image, name, house} = character;

    const card = document.createElement('article');
    card.classList.add('card-character');
    card.dataset.productId = name;

    const cardImage = document.createElement('img');
    cardImage.setAttribute("src", image);
    cardImage.setAttribute("alt", `image of ${name}`);

    const cardName = document.createElement('h2');
    cardName.textContent = name;
    cardName.classList.add('card-name');

    const cardHouse = document.createElement('p');
    cardHouse.textContent = house;
    cardHouse.classList.add('card-house');
   
    //Botón de favorito 
    const favBtn = document.createElement("button"); 
    favBtn.type = "button";
    favBtn.classList.add("btn-fav");
    favBtn.setAttribute("aria-label", `Añadir ${name} a favoritos`)
    const icon = document.createElement('i');

    let isFavorite = isInFavorites(character);
    if (isFavorite) {
        icon.className = "fa-solid fa-heart";
        favBtn.classList.add("fav-active");
    } 
    else {
        icon.className = "fa-regular fa-heart";
    }
    favBtn.appendChild(icon);

    //Evento click del botón favorito
    favBtn.addEventListener("click", () => {
        // Alterna en el localStorage y devuelve true (añadido) o false (eliminado)
        const isFav = toggleFavorites(character); 
        if (isFav) {
            icon.className = "fa-solid fa-heart";
            favBtn.classList.add("fav-active");
        } else {
            icon.className = "fa-regular fa-heart";
            favBtn.classList.remove("fav-active");
        }
    });
    
    card.append(cardImage, cardName, cardHouse, favBtn);
    return card;
}

function createFavoriteCard(character){
    //Datos del personaje
    const {image, name, house} = character;

    const card = document.createElement('article');
    card.classList.add('card-character');
    card.dataset.productId = name;

    const cardImage = document.createElement('img');
    cardImage.setAttribute("src", image);
    cardImage.setAttribute("alt", `image of ${name}`);

    const cardName = document.createElement('h2');
    cardName.textContent = name;
    cardName.classList.add('card-name');

    const cardHouse = document.createElement('p');
    cardHouse.textContent = house;
    cardHouse.classList.add('card-house');

    //Botón de favorito 
    const favBtn = document.createElement("button"); 
    favBtn.type = "button";
    favBtn.classList.add("btn-fav");
    favBtn.setAttribute("aria-label", `Añadir ${name} a favoritos`)
    const icon = document.createElement('i');

    let isFavorite = isInFavorites(character);
    if (isFavorite) {
        icon.className = "fa-solid fa-heart";
        favBtn.classList.add("fav-active");
    } 
    else {
        icon.className = "fa-regular fa-heart";
    }
    favBtn.appendChild(icon);

    //Evento click del botón favorito
    favBtn.addEventListener("click", () => {
        // Alterna en el localStorage y devuelve true (añadido) o false (eliminado)
        const isFav = toggleFavorites(character); 
        if (isFav) {
            icon.className = "fa-solid fa-heart";
            favBtn.classList.add("fav-active");
        } else {
            icon.className = "fa-regular fa-heart";
            favBtn.classList.remove("fav-active");
        }
    });
    
    card.append(cardImage, cardName, cardHouse, favBtn);
    return card;
}

export {
    createCharacterCard,
    createFavoriteCard
}