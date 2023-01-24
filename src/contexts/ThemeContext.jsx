import React, { useState, createContext, useEffect } from 'react'

export const ThemeContext = createContext({
    theme: 'light',
    setTheme: () => {}
})

export default function ThemeContextProvider({...props}) {
    const [theme, setTheme] = useState('light')
    const userTheme = window.localStorage.getItem('theme')
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches

    function handleClick() {
        if (theme == 'dark') {
            setTheme('light')
            document.body.classList.remove('dark')
            window.localStorage.setItem('theme', 'light')
        } else {
            setTheme('dark')
            document.body.classList.add('dark')
            window.localStorage.setItem('theme', 'dark')
        }
    }

    useEffect(() => {
        if (userTheme == 'dark' || (!userTheme && systemTheme)) {
            document.body.classList.add('dark')
            setTheme('dark')
        } else {
            document.body.classList.remove('dark')
        }
    }, [setTheme])

    return (
        <ThemeContext.Provider value={{ theme, handleClick }}>
            {props.children}
        </ThemeContext.Provider>
    );
}