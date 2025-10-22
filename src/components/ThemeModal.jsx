// src/components/ThemeModal.jsx
import React from 'react';
import { useTheme, themes } from '../contexts/ThemeContext';
import './ThemeModal.css';

const ThemeModal = () => {
  const { showModal, selectTheme, currentTheme } = useTheme();

  if (!showModal) return null;

  return (
    <div className="theme-modal-overlay">
      <div className="theme-modal">
        <div className="theme-modal-header">
          <h2>Elige tu Paleta de Colores</h2>
          <p>Personaliza la experiencia visual del sitio</p>
        </div>

        <div className="theme-grid">
          {Object.keys(themes).map((themeKey) => {
            const theme = themes[themeKey];
            return (
              <div
                key={themeKey}
                className={`theme-card ${currentTheme === themeKey ? 'selected' : ''}`}
                onClick={() => selectTheme(themeKey)}
              >
                <div className="theme-preview">
                  <div 
                    className="theme-color-bar" 
                    style={{ backgroundColor: theme.primary }}
                  ></div>
                  <div 
                    className="theme-color-bar" 
                    style={{ backgroundColor: theme.primaryDark }}
                  ></div>
                  <div 
                    className="theme-color-bar" 
                    style={{ backgroundColor: theme.secondary }}
                  ></div>
                  <div 
                    className="theme-color-bar" 
                    style={{ backgroundColor: theme.background }}
                  ></div>
                </div>
                <div className="theme-info">
                  <h3>{theme.name}</h3>
                  <p>{theme.description}</p>
                </div>
                {currentTheme === themeKey && (
                  <div className="theme-check">✓</div>
                )}
              </div>
            );
          })}
        </div>

        <div className="theme-modal-footer">
          <p className="theme-hint">Podrás cambiar la paleta en cualquier momento</p>
        </div>
      </div>
    </div>
  );
};

export default ThemeModal;
