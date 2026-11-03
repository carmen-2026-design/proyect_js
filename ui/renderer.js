import { isInFavorites, toggleFavorites } from "../utils/localStorage.js";

function createFilterForm(){
    const form = document.createElement("form");
    form.id = "filter-form";

    const lblName = document.createElement('label');
    lblName.setAttribute('for', 'name-input');
    lblName.textContent = 'Name'; 

    const inputName = document.createElement('input');
    inputName.type = 'text';
    inputName.name =  'name'
    inputName.id = 'name-input';
    inputName.placeholder = 'name';

    const lblHouse = document.createElement('label');
    lblHouse.setAttribute('for', 'house-select');
    lblHouse.textContent = 'House'; 

    const selHouse = document.createElement('select');
    selHouse.setAttribute('name', 'house');
    selHouse.id = 'house-select';

    const optAll = document.createElement('option');
    optAll.value = 'all';
    optAll.textContent = 'all';
    selHouse.append(optAll);
    form.append(lblName, inputName, lblHouse, selHouse);
    
    return form;
}



function createCharacterCard(character){
    //Datos del personaje
    const {image, name, house, wand} = character;

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
    cardHouse.textContent = 'House: ' + house;
    cardHouse.classList.add('card-house');

    const cardWand = document.createElement('div');
    cardWand.classList.add('card-wand');
    const wandWand = document.createElement('p');
    wandWand.textContent = 'Wand:';
    const wandList = document.createElement('ul');
    const wandWood = document.createElement('li');
    wandWood.textContent = 'Wood: ' + wand.wood;
    const wandCore = document.createElement('li');
    wandCore.textContent = 'Core: ' + wand.core;
    const wandLength = document.createElement('li');
    wandLength.textContent = 'Length: ' + wand.length;
    wandList.append(wandWood, wandCore, wandLength);
    cardWand.append(wandWand, wandList);
     
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
    
    card.append(cardImage, cardName, cardHouse, cardWand, favBtn);
    return card;
}


function createFavoriteCard(character, onFavorite=()=>{}){
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
            onFavorite(character, true);
        } else {
            icon.className = "fa-regular fa-heart";
            favBtn.classList.remove("fav-active");
            onFavorite(character, false);
        }
    });
    
    card.append(cardImage, cardName, cardHouse, favBtn);
    return card;
}

export {
    createFilterForm,
    createCharacterCard,
    createFavoriteCard
}