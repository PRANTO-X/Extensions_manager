import React from 'react'
import { useState,useEffect } from 'react'
import { icons } from '../assets/assets'

const ThemeBtn = () => {

    const [isDarkMode,setTsDarkMode] = useState(false);

    useEffect(()=>{
        const theme = localStorage.getItem("theme");
        if(theme === "dark"){
            setTsDarkMode(true);
            document.documentElement.classList.add('dark');
        }else{
            localStorage.setItem("theme","light");
            setTsDarkMode(false);
        }
    },[]);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem("theme", "light");
            setTsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem("theme", "dark");
            setTsDarkMode(true);
        }
    };

  return (
    <button onClick={toggleTheme}  className='p-3 bg-btn rounded-lg cursor-pointer'><img src={isDarkMode ? icons.iconSun : icons.iconMoon } alt="" /></button>
  )
}

export default ThemeBtn