import { getCatalog } from "../utils/api.js";
import Character from "../model/Character.js";
import { createFilterForm, createCharacterCard } from "../ui/renderer.js";

const limit = 8;
let page = 1;
let totalPages = 1;

function loadFilterForm(){
    const container = document.getElementById('filters-section');
    container.innerHTML = "";
    const form = createFilterForm()
    container.append(form);
}

async function loadCatalog(page=1, limit=8, search= "",house="all"){
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
    showCatalog(filteredCatalog, page, limit);
}

function showCatalog(catalog, page=1, limit=8){
    const container = document.getElementById("catalog-section")
    container.innerHTML = "";

    const offset = getOffsetFromPage(page, limit)
    totalPages = getPageQuantity(catalog.length, limit);
    setText("current-page", page);
    setText("total-pages", totalPages);

    const catalogToShow = catalog.slice(offset, offset+limit);
    
    catalogToShow.forEach(character => {
        const card = createCharacterCard(character, (c,isFavorite) => {
        });
        container.appendChild(card);
    });

    updatePaginationButtons();
}

// ------------ Funciones de búsqueda -----------------
function setSearchForm(){
    const form = document.getElementById("filter-form");

    form.addEventListener("submit",(event)=>{
        event.preventDefault();
        const formData = new FormData(event.target);

        const search = formData.get("name").toLowerCase().trim();
        const house = formData.get("house");
        page = 1;
        loadCatalog(page, limit, search, house);
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
            page = 1;
            loadCatalog(page, limit, search, house);
        },500)
    });
    //buscar al cambiar de casa
    houseSelector.addEventListener("change", () => {
        const search = searchInput.value.toLowerCase().trim();
        const house = houseSelector.value;
        page = 1;
        loadCatalog(page, limit, search, house);
    });
}

// ------------ Funciones de paginado -----------------
function getOffsetFromPage(page, limit) {
    return (page - 1) * limit;
}

function getPageQuantity(totalCount, limit) {
    console.log(totalCount, limit)
    const totalPages = Math.ceil(totalCount / limit);
    return totalPages;
}

function setText(elementID, text) {
    const element = document.getElementById(elementID);
    element.textContent = text;
}

function updatePaginationButtons() {
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");

    prevButton.disabled = page === 1;
    nextButton.disabled = page >= totalPages;
}

function createPageListeners() {
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");
   
    prevButton.addEventListener("click", () => {
        if (page > 1) {
            page--;
            const search = document.getElementById("name-input").value.toLowerCase().trim();
            const house = document.getElementById("house-select").value;
            loadCatalog(page, limit, search, house);
        }
    });

    nextButton.addEventListener("click", () => {
        if (page < totalPages) {
            page++;
            const search = document.getElementById("name-input").value.toLowerCase().trim();
            const house = document.getElementById("house-select").value;
            loadCatalog(page, limit, search, house);
        }
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

// ------------ Carga del js -----------------
// Inicializar menú hamburguesa
initMenu();
//crear form de filtros
loadFilterForm();
//asignar eventos de filtrado
setSearchForm();
controlSearchQuery();
//asignar eventos de paginado
createPageListeners();
//cargar catálogo
loadCatalog();

