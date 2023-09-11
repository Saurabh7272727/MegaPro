import { useState, useEffect } from 'react';
import { FetchApi } from './FetchApi';
import { useContext } from 'react';



const ContextApi = (url) => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        try {
            setIsLoading(true);
            FetchApi(url).then((res) => {
                return res;
            }).then((e) => {
                setData(e.products);
                setIsLoading(false);
            })
        } catch (e) {
            console.error(e);
        }
    }, []);


    return { data, isLoading };

}

export default ContextApi;