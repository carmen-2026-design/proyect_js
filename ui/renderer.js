import { isInFavorites, toggleFavorites } from "../utils/localStorage.js";


function createFilterForm(){

    const form = document.createElement("form");
    form.id = "filter-form";
    
    // Buscar por nombre
    const lblName = document.createElement('label');
    lblName.setAttribute('for', 'name-input');
    lblName.textContent = 'Nombre';

    const divSearch = document.createElement('div');
    divSearch.classList.add('search-container');
    const inputName = document.createElement('input');
    inputName.type = 'text';
    inputName.name =  'name'
    inputName.id = 'name-input';
    inputName.placeholder = 'Buscar por nombre';
    const iconSearch = document.createElement('i');
    iconSearch.classList.add('fa-solid', 'fa-magnifying-glass');
    divSearch.append(inputName, iconSearch);
    
    // Buscar por casa
    const lblHouse = document.createElement('label');
    lblHouse.setAttribute('for', 'house-select');
    lblHouse.textContent = 'Casa';

    const selectHouse = document.createElement('select');
    selectHouse.name = 'house';
    selectHouse.id = 'house-select';

    const houses = ['Todas', 'Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'];

    houses.forEach(house => {
        const option = document.createElement('option');
        option.value = house === 'Todas' ? 'all' : house;
        option.textContent = house;

        selectHouse.appendChild(option);
    });

    form.append(lblName, divSearch, lblHouse, selectHouse);
   
    return form;
}


function createCharacterCard(character){
    //Datos del personaje
    const {image, name, house, wand, patronus} = character;

    const card = document.createElement('article');
    card.classList.add('card-character');
    card.dataset.productId = name;

    const cardImage = document.createElement('img');
    cardImage.setAttribute("src", image);
    cardImage.setAttribute("alt", `image of ${name}`);

    const cardName = document.createElement('h4');
    cardName.textContent = name;
    cardName.classList.add('card-name');

    const cardWand = document.createElement('p');
    cardWand.textContent = 'Varita: ' + wand.wood + ", " + wand.core + ", " + wand.length + " pulgadas";

    const cardPatronus = document.createElement('p');
    cardPatronus.textContent = 'Patronus: ' + patronus;

    const cardHouse = document.createElement('h5');
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

    const cardHouseFav = document.createElement('div');
    cardHouseFav.classList.add('card-house-fav');
    cardHouseFav.append(cardHouse, favBtn);

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
    
    card.append(cardImage, cardName, cardWand, cardPatronus, cardHouseFav);
    return card;
}


function createFavoriteCard(character, onFavorite=()=>{}){
    //Datos del personaje
    const {image, name, house, wand, patronus} = character;

    const card = document.createElement('article');
    card.classList.add('card-character');
    card.dataset.productId = name;

    const cardImage = document.createElement('img');
    cardImage.setAttribute("src", image);
    cardImage.setAttribute("alt", `image of ${name}`);

    const cardName = document.createElement('h4');
    cardName.textContent = name;
    cardName.classList.add('card-name');

    const cardWand = document.createElement('p');
    cardWand.textContent = 'Varita: ' + wand.wood + ", " + wand.core + ", " + wand.length + " pulgadas";

    const cardPatronus = document.createElement('p');
    cardPatronus.textContent = 'Patronus: ' + patronus;

    const cardHouse = document.createElement('h5');
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

    const cardHouseFav = document.createElement('div');
    cardHouseFav.classList.add('card-house-fav');
    cardHouseFav.append(cardHouse, favBtn);

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
    
    card.append(cardImage, cardName, cardWand, cardPatronus, cardHouseFav);
    return card;

    // //Datos del personaje
    // const {image, name, house} = character;

    // const card = document.createElement('article');
    // card.classList.add('card-character');
    // card.dataset.productId = name;

    // const cardImage = document.createElement('img');
    // cardImage.setAttribute("src", image);
    // cardImage.setAttribute("alt", `image of ${name}`);

    // const cardName = document.createElement('h2');
    // cardName.textContent = name;
    // cardName.classList.add('card-name');

    // const cardHouse = document.createElement('p');
    // cardHouse.textContent = house;
    // cardHouse.classList.add('card-house');

    // //Botón de favorito 
    // const favBtn = document.createElement("button"); 
    // favBtn.type = "button";
    // favBtn.classList.add("btn-fav");
    // favBtn.setAttribute("aria-label", `Añadir ${name} a favoritos`)
    // const icon = document.createElement('i');

    // let isFavorite = isInFavorites(character);
    // if (isFavorite) {
    //     icon.className = "fa-solid fa-heart";
    //     favBtn.classList.add("fav-active");
    // } 
    // else {
    //     icon.className = "fa-regular fa-heart";
    // }
    // favBtn.appendChild(icon);

    // //Evento click del botón favorito
    // favBtn.addEventListener("click", () => {
    //     // Alterna en el localStorage y devuelve true (añadido) o false (eliminado)
    //     const isFav = toggleFavorites(character); 
    //     if (isFav) {
    //         icon.className = "fa-solid fa-heart";
    //         favBtn.classList.add("fav-active");
    //         onFavorite(character, true);
    //     } else {
    //         icon.className = "fa-regular fa-heart";
    //         favBtn.classList.remove("fav-active");
    //         onFavorite(character, false);
    //     }
    // });
    
    // card.append(cardImage, cardName, cardHouse, favBtn);
    // return card;
}

export {
    createFilterForm,
    createCharacterCard,
    createFavoriteCard
}