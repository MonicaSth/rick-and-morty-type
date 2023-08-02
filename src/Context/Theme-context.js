import React, { useContext, useState } from "react";

export const ThemeContext = React.createContext({
  themeIsLight: false,
  toggleTheme: () => {},
});

const ThemeContextProvider = (props) => {
  const [isLight, setIsLight] = useState(false);

  const toggleThemeHandler = () => {
    setIsLight(!isLight);
  };
  return (
    <ThemeContext.Provider
      value={{ toggleTheme: toggleThemeHandler, themeIsLight: isLight }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);

export default ThemeContextProvider;
