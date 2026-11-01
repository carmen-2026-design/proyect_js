import { getCatalog } from "../utils/api.js";
import Character from "../model/Character.js";
import { createCharacterCard } from "../ui/renderer.js";

async function loadCatalog(){
    const response = await getCatalog();
    
    if (response.error)
    {
        console.error("Error al cargar el catálogo");
        return;
    }
    
    const catalog = response.data.map(c => new Character(c))
    console.log(catalog);

    showCatalog(catalog);
}

function showCatalog(catalog){
    const container = document.getElementById("catalog-section")
    container.innerHTML = "";

    catalog.forEach(c => {
        const card = createCharacterCard(c)
        container.appendChild(card);
    });
}


loadCatalog();