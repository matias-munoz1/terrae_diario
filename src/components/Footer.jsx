// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-content">
          <div className="footer-section">
          <h3>Terrae Consultores</h3>
          <p>Tu fuente de noticias confiable desde 2025</p>
        </div>
        
        <div className="footer-section">
          <h3>Secciones</h3>
          <a href="/categoria/politica">Política</a>
          <a href="/categoria/economia">Economía</a>
          <a href="/categoria/deportes">Deportes</a>
          <a href="/categoria/cultura">Cultura</a>
          <a href="/categoria/tecnologia">Tecnología</a>
        </div>
        
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Email: contacto@terrae.cl</p>
          <p>Tel: +56 9 1234 5678</p>
          <p>Dirección: Temuco, Chile</p>
        </div>
        
        <div className="footer-section">
          <h3>Síguenos</h3>
          <div className="social-links">
            <a href="#facebook">Facebook</a>
            <a href="#twitter">Twitter</a>
            <a href="#instagram">Instagram</a>
          </div>
        </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Terrae Consultores. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
