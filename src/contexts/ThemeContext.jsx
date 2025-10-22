// src/contexts/ThemeContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = {
  classic: {
    name: 'Clásico',
    description: 'Rojo tradicional de periódico',
    primary: '#e74c3c',
    primaryDark: '#c0392b',
    secondary: '#34495e',
    text: '#1a1a1a',
    textLight: '#555',
    background: '#f5f5f5',
    white: '#ffffff',
    border: '#e0e0e0',
  },
  modern: {
    name: 'Moderno',
    description: 'Azul corporativo elegante',
    primary: '#3498db',
    primaryDark: '#2980b9',
    secondary: '#2c3e50',
    text: '#1a1a1a',
    textLight: '#555',
    background: '#f8f9fa',
    white: '#ffffff',
    border: '#dee2e6',
  },
  forest: {
    name: 'Bosque',
    description: 'Verde natural y sostenible',
    primary: '#27ae60',
    primaryDark: '#229954',
    secondary: '#16a085',
    text: '#1a1a1a',
    textLight: '#555',
    background: '#f0f4f3',
    white: '#ffffff',
    border: '#d5e8df',
  },
  sunset: {
    name: 'Atardecer',
    description: 'Naranja vibrante y cálido',
    primary: '#e67e22',
    primaryDark: '#d35400',
    secondary: '#e74c3c',
    text: '#1a1a1a',
    textLight: '#555',
    background: '#fef5f1',
    white: '#ffffff',
    border: '#fadbd1',
  },
  midnight: {
    name: 'Medianoche',
    description: 'Púrpura sofisticado',
    primary: '#9b59b6',
    primaryDark: '#8e44ad',
    secondary: '#34495e',
    text: '#1a1a1a',
    textLight: '#555',
    background: '#f9f7fb',
    white: '#ffffff',
    border: '#e8dff5',
  },
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved || null;
  });

  const [showModal, setShowModal] = useState(() => {
    const saved = localStorage.getItem('theme');
    return !saved; // Mostrar modal solo si no hay tema guardado
  });

  useEffect(() => {
    if (currentTheme) {
      localStorage.setItem('theme', currentTheme);
      applyTheme(currentTheme);
    }
  }, [currentTheme]);

  const applyTheme = (themeName) => {
    const theme = themes[themeName];
    if (theme) {
      document.documentElement.style.setProperty('--color-primary', theme.primary);
      document.documentElement.style.setProperty('--color-primary-dark', theme.primaryDark);
      document.documentElement.style.setProperty('--color-secondary', theme.secondary);
      document.documentElement.style.setProperty('--color-text', theme.text);
      document.documentElement.style.setProperty('--color-text-light', theme.textLight);
      document.documentElement.style.setProperty('--color-background', theme.background);
      document.documentElement.style.setProperty('--color-white', theme.white);
      document.documentElement.style.setProperty('--color-border', theme.border);
    }
  };

  const selectTheme = (themeName) => {
    setCurrentTheme(themeName);
    setShowModal(false);
  };

  const openThemeSelector = () => {
    setShowModal(true);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, selectTheme, showModal, openThemeSelector, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe usarse dentro de ThemeProvider');
  }
  return context;
};
