import React, { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Try to get the theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    // Return true if the saved theme is 'dark', otherwise false
    return savedTheme === "dark";
  });

  useEffect(() => {
    // Save the theme to localStorage whenever it changes
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  // Sync theme across tabs / windows
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "theme") {
        setIsDarkMode(e.newValue === "dark");
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Sync theme with the user's system preferences
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      setIsDarkMode(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeListener(handleChange);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
