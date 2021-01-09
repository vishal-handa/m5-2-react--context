import React, { useEffect, useState } from "react";

const usePersistedState=(stateName, initialValue)=>{
    const [value, setValue] = useState(initialValue);

    useEffect(()=>{
        let savedValue=localStorage.getItem(stateName);
        //console.log(savedValue);
        setValue(JSON.parse(savedValue));
    },[])

    useEffect(()=>{
        localStorage.setItem(stateName, JSON.stringify(value));
    },[value]);

    return [value, setValue];
}

export default usePersistedState;