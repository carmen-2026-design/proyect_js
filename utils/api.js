import { FetchError } from "./error.js";

const API_URL = "https://hp-api.onrender.com/api/characters";

async function fetchData(url){
    try{
        const response = await fetch(url)
        if (!response.ok) {
            throw new FetchError(response);
        }

        const result = await response.json();
        return {
            error: null,
            data: result
        }

    }catch{
        console.error(error);ç
        return{
            error: error,
            data: null
        }

    }
}

function getCatalog(){
    let url = API_URL;
    return fetchData(url);
}

export {
    getCatalog
}