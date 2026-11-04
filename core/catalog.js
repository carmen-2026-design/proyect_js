import { getCatalog } from "../utils/api.js";
import Character from "../model/Character.js";
import { createFilterForm, createCharacterCard } from "../ui/renderer.js";

function loadFilterForm(){
    const container = document.getElementById('filters-section');
    container.innerHTML = "";
    const form = createFilterForm()
    container.append(form);
}

async function loadCatalog(search= "",house="all"){
    const response = await getCatalog();
    
    if (response.error)
    {
        console.error("Error al cargar el catálogo");
        return;
    }
    
    const catalog = response.data.map(c => new Character(c))
    console.log(catalog);

    const filteredCatalog = catalog.filter(character =>{
        //filtrar por nombre
        if (search){
            if(!character.name.toLowerCase().includes(search.toLowerCase()))
                return false;
        }
        //filtrar por casa
        if (house !== "all"){
            if(!(character.house || "").includes(house)){
                return false;
            }
        }
        return true;
    });

    //Muestra las fichas del catálogo
    showCatalog(filteredCatalog);
}

function showCatalog(catalog){
    const container = document.getElementById("catalog-section")
    container.innerHTML = "";

    catalog.forEach(character => {
        const card = createCharacterCard(character, (c,isFavorite) => {
        });
        container.appendChild(card);
    })
}

function setSearchForm(){
    const form = document.getElementById("filter-form");
    form.addEventListener("submit",(event)=>{
        event.preventDefault();
        const formData = new FormData(event.target);
        const search = formData.get("name").toLowerCase().trim();
        const house = formData.get("house");
        loadCatalog(search,house);
    })
}

function controlSearchQuery(){
    const searchInput = document.getElementById("name-input");
    const houseSelector = document.getElementById("house-select");
    let timeout = null;

    //buscar al escribir en el input
    searchInput.addEventListener("input",(e)=>{
        clearTimeout(timeout);
        timeout = setTimeout(()=>{
            const search  = e.target.value.toLocaleLowerCase().trim();
            const house = houseSelector.value;
            loadCatalog(search, house);
        },500)
    });

    //buscar al cambiar de casa
    houseSelector.addEventListener("change", () => {
        const search = searchInput.value.toLowerCase().trim();
        const house = houseSelector.value;
        loadCatalog(search, house);
    });
}

//crear form de filtros
loadFilterForm();
//asignar eventos
setSearchForm();
controlSearchQuery();
//cargar catálogo
loadCatalog();

