import { getCatalog } from "../utils/api.js";
import Character from "../model/Character.js";
import { createFilterForm, createCharacterCard } from "../ui/renderer.js";

function loadFilterForm(){
    const container = document.getElementById('filters-section');
    container.innerHTML = "";
    const form = createFilterForm()
    container.append(form);
}

async function loadCatalog(){
    const response = await getCatalog();
    
    if (response.error)
    {
        console.error("Error al cargar el catálogo");
        return;
    }
    
    const catalog = response.data.map(c => new Character(c))
    console.log(catalog);

    //Muestra las fichas del catálogo
    showCatalog(catalog);

    //Carga en el filtro de casas las del catálogo
    setHousesOptions(catalog);
}

function showCatalog(catalog){
    const container = document.getElementById("catalog-section")
    container.innerHTML = "";

    catalog.forEach(c => {
        const card = createCharacterCard(c)
        container.appendChild(card);
    });
}

function getHouses(catalog){
    const housesSet = new Set();
    catalog.forEach(c => {
        housesSet.add(c.house);
    })
    const houses = Array.from(housesSet);
    return houses;
}

function setHousesOptions(catalog) {
    const houses = getHouses(catalog);
    console.log(houses);
    const selector = document.getElementById("house-select");
    const options = houses.map(h => {
        const option = document.createElement("option");
        option.value = h;
        option.textContent = h;
        return option;
    })
    selector.append(...options);
}

loadFilterForm();
loadCatalog();

