import React, { useEffect, useState } from 'react'

function useFetch(url) {
    const [responseJSON, setResponseJSON] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        setIsLoading(true)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setResponseJSON(data)
                setIsLoading(false)
            })
            .catch(err => {
                setError(err)
                setIsLoading(false)
            })
    }, [url])

    return { responseJSON, isLoading, error }
}
export default useFetch