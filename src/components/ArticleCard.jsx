// src/components/ArticleCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ArticleCard.css';

const ArticleCard = ({ article, featured = false }) => {
  return (
    <div className={`article-card ${featured ? 'featured' : ''}`}>
      <Link to={`/articulo/${article.id}`}>
        <div className="article-image">
          <img src={article.imageUrl} alt={article.title} />
          <span className="category-badge">{article.category}</span>
        </div>
        
        <div className="article-content">
          <h3>{article.title}</h3>
          {article.subtitle && <p className="subtitle">{article.subtitle}</p>}
          
          <div className="article-meta">
            <span className="author">Por {article.author}</span>
            <span className="date">{new Date(article.publishDate).toLocaleDateString('es-ES')}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;
