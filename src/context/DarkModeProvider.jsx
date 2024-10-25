import React, { createContext, useState, useEffect } from 'react';



export const DarkModeContext = createContext()



const DarkModeProvider = ({ children }) => {

    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem('darkMode')
    );

    // Update the body class when the theme changes
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    const handleToggle = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        localStorage.setItem('darkMode', newMode); // Store dark mode preference in localStorage
    };


    return (
        <DarkModeContext.Provider value={{
            isDarkMode,
            handleToggle,
            setIsDarkMode
        }}>
            {children}
        </DarkModeContext.Provider>
    );
}

export default DarkModeProvider;