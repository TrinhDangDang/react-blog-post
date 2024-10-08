import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxiosFetch = (dataUrl) => {
    const [data, setData] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let isMounted = true;
        const source = axios.CancelToken.source(); //create a cancel token source, 

        const fetchData = async (url) => {
            setIsLoading(true);
            try {
                const response = await axios.get(url, {
                    cancelToken: source.token 
                });
                if (isMounted) {
                    setData(response.data);
                    setFetchError(null);
                }
            } catch (err) {
                if (isMounted) {
                    setFetchError(err.message);
                    setData([]);
                }
            } finally {
                isMounted && setIsLoading(false);
            }
        }

        fetchData(dataUrl);

        const cleanUp = () => {
            isMounted = false;
            source.cancel();
        }

        return cleanUp;
    }, [dataUrl]);

    return { data, fetchError, isLoading };
}

export default useAxiosFetch;


//What useAxiosFetch does?
// Fetch Data: It fetches data from the provided URL (dataUrl) when the component mounts.
// Manages State: It keeps track of the data (data), whether the data is still being fetched (isLoading), and if any error occurred (fetchError).
// Clean Up: It cancels the fetch request if the component is unmounted before the data is retrieved to prevent unwanted behavior.