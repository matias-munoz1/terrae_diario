// src/components/NewsCarousel.jsx
import React, { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard';
import './NewsCarousel.css';

const NewsCarousel = ({ articles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Calcular cuántos items mostrar según el ancho de pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize(); // Ejecutar al montar
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, articles.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  // Calcular el porcentaje de desplazamiento incluyendo el gap
  const itemWidth = 100 / itemsPerView;
  const gapPercentage = (16 / (window.innerWidth - 100)) * 100; // gap en porcentaje
  const translateX = -(currentIndex * (itemWidth + gapPercentage));

  return (
    <div className="news-carousel">
      <button 
        className="carousel-btn carousel-btn-prev" 
        onClick={handlePrev}
        disabled={currentIndex === 0}
        aria-label="Anterior"
      >
        ❮
      </button>

      <div className="carousel-container">
        <div 
          className="carousel-track"
          style={{ 
            transform: `translateX(${translateX}%)`,
            transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          {articles.map((article) => (
            <div 
              key={article.id} 
              className="carousel-item"
              style={{ 
                flex: `0 0 calc(${itemWidth}% - ${16 * (itemsPerView - 1) / itemsPerView}px)`
              }}
            >
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      </div>

      <button 
        className="carousel-btn carousel-btn-next" 
        onClick={handleNext}
        disabled={currentIndex >= maxIndex}
        aria-label="Siguiente"
      >
        ❯
      </button>

      {/* Indicadores de página */}
      {maxIndex > 0 && (
        <div className="carousel-indicators">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir a página ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsCarousel;
