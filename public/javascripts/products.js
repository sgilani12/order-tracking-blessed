import axios from 'axios';

async function deleteProduct(id){
    let url = `/products/:${id}`;
    confirm(`Deleting Product ${id}`);
    console.log(`endpoint to hit: ${url}`);
    const res = await axios.delete(url);
    console.log(`request status: ${res.status}`);                                  
}

