// src/components/ThemeSelector.jsx
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import './ThemeSelector.css';

const ThemeSelector = () => {
  const { openThemeSelector } = useTheme();

  return (
    <button 
      className="theme-selector-btn" 
      onClick={openThemeSelector}
      title="Cambiar estilo"
      aria-label="Cambiar estilo y colores"
    >
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Pincel de pintura */}
        <path d="M18.37 2.63l3 3a1 1 0 0 1 0 1.41l-9 9a1 1 0 0 1-.7.29H8a1 1 0 0 1-1-1v-3.67a1 1 0 0 1 .29-.7l9-9a1 1 0 0 1 1.41 0z"/>
        <path d="M7 17v4a2 2 0 0 0 2 2h2"/>
        <circle cx="11" cy="13" r="2" fill="currentColor"/>
      </svg>
    </button>
  );
};

export default ThemeSelector;
