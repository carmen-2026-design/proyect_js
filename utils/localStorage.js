function getFavoritesFromLocalStorage(){
    const favoritesString = localStorage.getItem("favorites");
    // Si no existe, devolvemos un array vacío por defecto
    if (!favoritesString) {
        return [];
    }
    return JSON.parse(favoritesString);
}

function saveFavoritesToLocalStorage(favorites){
    const favoritesString =JSON.stringify(favorites);
    localStorage.setItem("favorites", favoritesString);
}

function clearFavorites(favorites){
    localStorage.setItem("favorites", "[]");
}

//Añadir o quitar del localStorage 
function toggleFavorites(element){
    let result = false;
    const favorites = getFavoritesFromLocalStorage();
    const oldFavoriteIndex = favorites.findIndex(f=>f.name === element.name);
    if (oldFavoriteIndex === -1){
        favorites.push(element);
        result = true;
    }else{
        favorites.splice(oldFavoriteIndex,1);
    }
    saveFavoritesToLocalStorage(favorites);
    return result;
}

function isInFavorites(element){
    const favorites = getFavoritesFromLocalStorage();
    const oldFavorite = favorites.find(f=>f.name === element.name);
    if (oldFavorite){
        return true;
    }else{
        return false;
    }
}

export {
    getFavoritesFromLocalStorage,
    saveFavoritesToLocalStorage,
    clearFavorites,
    toggleFavorites,
    isInFavorites
}
