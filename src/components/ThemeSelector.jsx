// src/components/ThemeSelector.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import './ThemeSelector.css';

const ThemeSelector = () => {
  const { openThemeSelector, currentTheme } = useTheme();
  const [showTooltip, setShowTooltip] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const tooltipTimerRef = useRef(null);

  useEffect(() => {
    // Mostrar tooltip cuando se elige un tema
    if (currentTheme) {
      setShowTooltip(true);
      
      // Ocultar tooltip después de 10 segundos
      if (tooltipTimerRef.current) {
        clearTimeout(tooltipTimerRef.current);
      }
      
      tooltipTimerRef.current = setTimeout(() => {
        if (!isHovering) {
          setShowTooltip(false);
        }
      }, 10000);
    }

    return () => {
      if (tooltipTimerRef.current) {
        clearTimeout(tooltipTimerRef.current);
      }
    };
  }, [currentTheme, isHovering]);

  const handleClick = () => {
    setShowTooltip(false);
    openThemeSelector();
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    // Si hay un timer activo, el tooltip se ocultará cuando expire
  };

  const handleCloseTooltip = (e) => {
    e.stopPropagation();
    setShowTooltip(false);
    if (tooltipTimerRef.current) {
      clearTimeout(tooltipTimerRef.current);
    }
  };

  return (
    <div className="theme-selector-wrapper">
      <button 
        className="theme-selector-btn" 
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
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
      {showTooltip && (
        <div 
          className="theme-tooltip"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <span>Cambiar paleta de colores</span>
          <button 
            className="tooltip-close" 
            onClick={handleCloseTooltip}
            aria-label="Cerrar"
          >
            ×
          </button>
          <div className="tooltip-arrow"></div>
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;
