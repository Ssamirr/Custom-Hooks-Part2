import React, { useEffect, useState } from 'react'

function useLocalStorage(key, value) {

    const [data, setData] = useState(() => {
        if (window.localStorage.getItem(key))
            return JSON.parse(window.localStorage.getItem(key))
        return value
    });


    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(data))
    }, [data])

    return [data, setData]

}

export default useLocalStorage