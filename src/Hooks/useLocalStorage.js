import {useState} from 'react'

export const useLocalStorage = (key, initialValue) =>{
    //1. Create our state values
    const[storedValue, setStoredValue] = useState(()=>{
    const myItem = window.localStorage.getItem(key)
    return myItem ? JSON.parse(myItem) : initialValue
    })
    const setValue = (value) =>{
        //2. Save value to state
        setStoredValue(value)
        //3, Save value to local storage
        window.localStorage.setItem(key, JSON.stringify(value))
    }
    return [storedValue, setValue]
}

