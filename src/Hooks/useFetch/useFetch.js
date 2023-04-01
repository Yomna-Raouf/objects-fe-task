import { useEffect, useState } from 'react';

const useFetch = (serviceMethod, successCallback) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!serviceMethod) return;
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await serviceMethod();
                const data = await response.data;

                setData(data);
                setLoading(false);
                if(successCallback) successCallback();
            } catch(error) {
                setLoading(false);
                setError(error);
            }
        };

        fetchData();
    }, [serviceMethod, successCallback]);

    return { loading, error, data };
};

export default useFetch;
