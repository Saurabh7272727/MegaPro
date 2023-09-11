import { useEffect, useState } from "react";
import { fetchApi } from './FetchApi';

const ApifetchData = (url) => {
    const [data, setData] = useState();
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState();
    useEffect(() => {
        try {
            fetchApi(url).then((res) => {
                return res;
            }).then((e) => {
                setData(e);
                setLoading(false);
            })
        } catch (e) {
            setError(e);
        }
    }, [])
    return { data, isLoading, error }
}

export default ApifetchData;