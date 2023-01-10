import React, { useEffect } from 'react'
import useLocalStorage from '../customHooks/useLocalStorage'

function GetStorage() {
    let [ data, setData ] = useLocalStorage("name", "John")
    useEffect(() => {
        console.log(data)
    }, [data])
    return (
        <>

        </>
    )
}

export default GetStorage