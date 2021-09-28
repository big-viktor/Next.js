import React, { useContext, useState } from 'react';
import { changeCssVariables } from '../../pages/components/changeCssVariables.js';

export const THEME_Prehistori = 'light';
export const THEME_Standart = 'dark';
export const THEME_Future = 'neitral';

const ThemeContext = React.createContext();

const ThemeProvaider = ({ children, ...props }) => {
    const [theme, setTheme] = useState(null);
    const change = name => {
        setTheme(name);
        changeCssVariables(name);
    }
    return (
        <>
            <ThemeContext.Provider
                value={{
                    theme,
                    change,
                }}
                {...props}
            >
                {children}
            </ThemeContext.Provider>
        </>
    )
};
export default ThemeProvaider;

export const useTheme = () => useContext(ThemeContext);
