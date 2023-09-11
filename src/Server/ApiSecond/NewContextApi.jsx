import { useState, useEffect } from 'react';

import { NewFetchApi } from './NewFetchApi';

const NewContextApi = (url) => {
    const [Newdata, setData] = useState();
    const [newIsLoading, setIsLoading] = useState(true);

    useEffect(() => {
        try {
            NewFetchApi(url).then((res) => {
                return res;
            }).then((e) => {
                setData(e?.products);
                setIsLoading(false);
            })
        } catch (e) {
            console.log(e);
        }
    }, []);
    return { Newdata, newIsLoading };
}

export default NewContextApi;
