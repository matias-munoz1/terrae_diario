import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedGrid.css';

const FeaturedGrid = ({ mainArticle, sideArticles = [] }) => {
  return (
    <div className="featured-grid">
      {/* Card principal (izquierda) */}
      {mainArticle && (
        <Link to={`/articulo/${mainArticle.id}`} className="featured-main">
          <div 
            className="featured-main-bg"
            style={{ backgroundImage: `url(${mainArticle.imageUrl})` }}
          >
            <div className="featured-overlay">
              <span className="featured-category">{mainArticle.category}</span>
              <h2 className="featured-title">{mainArticle.title}</h2>
              <p className="featured-date">
                {new Date(mainArticle.publishDate).toLocaleDateString('es-ES', { 
                  day: 'numeric', 
                  month: 'long', 
                  year: 'numeric' 
                })}
              </p>
            </div>
          </div>
        </Link>
      )}

      {/* Cards secundarias (derecha, apiladas) */}
      <div className="featured-side">
        {sideArticles.slice(0, 2).map((article) => (
          <Link 
            key={article.id} 
            to={`/articulo/${article.id}`} 
            className="featured-side-card"
          >
            <div 
              className="featured-side-bg"
              style={{ backgroundImage: `url(${article.imageUrl})` }}
            >
              <div className="featured-overlay">
                <span className="featured-category">{article.category}</span>
                <h3 className="featured-side-title">{article.title}</h3>
                <p className="featured-date">
                  {new Date(article.publishDate).toLocaleDateString('es-ES', { 
                    day: 'numeric', 
                    month: 'long', 
                    year: 'numeric' 
                  })}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedGrid;
