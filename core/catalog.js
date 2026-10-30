import { getCatalog } from "../utils/api.js";

async function LoadCatalog(){
    const data = await getCatalog();

    console.log(data);
}


LoadCatalog();