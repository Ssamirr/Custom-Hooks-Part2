import React, { useState } from 'react'

function useStateWithHistory(Value) {
    const [value, setValue] = useState(Value);
    const [history, setHistory] = useState([Value]);
    const [index, setIndex] = useState(0)

    console.log(Value)

    const changeValue = (num) => {
        setValue(num);
        setIndex(index + 1)
        setHistory(history.slice(0, index + 1).concat(num))
    };

    const goBack = () => {
        if (index > 0) {
            setIndex(index - 1);
            setValue(history[index - 1]);
        }
    };

    const goForward = () => {
        if (index < history.length - 1) {
            setIndex(index + 1);
            setValue(history[index + 1]);
        }
    };


    return [value, changeValue, goBack, goForward, history]
}

export default useStateWithHistory