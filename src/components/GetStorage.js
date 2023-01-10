import React, { useEffect } from 'react'
import useLocalStorage from '../customHooks/useLocalStorage'
import useStateWithHistory from '../customHooks/useStateWithHistory'

function GetStorage() {
    let [ data, setData ] = useLocalStorage("name", "John")
    let [value, changeValue, goBack, goForward, history] = useStateWithHistory(0)
    useEffect(() => {
        console.log(data)
    }, [data])
    return (
        <>

        </>
    )
}

export default GetStorage