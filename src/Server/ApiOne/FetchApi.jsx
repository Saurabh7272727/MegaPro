import axios from 'axios';

const URL = "https://fakestoreapi.com/products";

export const fetchApi = async (url) => {
    try {
        const { data } = await axios?.get(URL + url, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        return data;
    } catch (err) {
        return err;
    }
}



