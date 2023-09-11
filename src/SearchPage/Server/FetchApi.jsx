import axios from 'axios';

const URL = "https://dummyjson.com/products/search?q=";

export const FetchApi = async (url) => {
    const { data } = await axios.get(URL + url, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
    return data;
}