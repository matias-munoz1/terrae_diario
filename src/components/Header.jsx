// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const categories = ['Política', 'Economía', 'Deportes', 'Cultura', 'Tecnología'];

  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          <Link to="/">
            <img 
              src="https://terraeconsultores.cl/wp-content/uploads/2017/07/terrae-logo-01.svg" 
              alt="Terrae Consultores" 
              style={{ height: '50px', width: 'auto' }}
            />
          </Link>
        </div>
        <div className="header-info">
          <span>{new Date().toLocaleDateString('es-ES', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</span>
        </div>
      </div>
      
      <nav className="navbar">
        <Link to="/">Inicio</Link>
        {categories.map(cat => (
          <Link key={cat} to={`/categoria/${cat.toLowerCase()}`}>
            {cat}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
