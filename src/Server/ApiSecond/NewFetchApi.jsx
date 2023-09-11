import { useState, useEffect } from 'react';
import axios from 'axios';


const URL = "https://dummyjson.com";

export const NewFetchApi = async (url) => {
    try {
        const { data } = await axios.get(URL + url, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        return data;
    } catch (e) {
        console.log(e);
    }
}