import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [toggleDarkMode, setToggleDarkMode] = useState(
        localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        const root = window.document.documentElement;
        if (toggleDarkMode === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.setItem("theme", toggleDarkMode);
    }, [toggleDarkMode]);

    return (
        <ThemeContext.Provider
            value={{
                toggleDarkMode: toggleDarkMode === "dark",
                setToggleDarkMode,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
