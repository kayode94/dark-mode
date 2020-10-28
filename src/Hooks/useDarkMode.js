import {useLocalStorage} from './useLocalStorage'

export const useDarkMode = (key)=>{
    const [isDarkMode, setDarkMode] = useLocalStorage(key, false)
    const toggleDarkMode = () =>{
        setDarkMode(!isDarkMode)
    }
    return [isDarkMode, toggleDarkMode]
}