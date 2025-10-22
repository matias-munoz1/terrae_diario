// src/pages/ArticlePage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { articlesData } from '../data/articles';
import './ArticlePage.css';

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const foundArticle = articlesData.find(a => a.id === parseInt(id));
    setArticle(foundArticle);
  }, [id]);

  if (!article) return <div>Cargando...</div>;

  return (
    <article className="article-page">
      <div className="article-header">
        <span className="category-tag">{article.category}</span>
        <h1>{article.title}</h1>
        {article.subtitle && <h2 className="subtitle">{article.subtitle}</h2>}
        
        <div className="article-meta">
          <span className="author">Por {article.author}</span>
          <span className="date">
            {new Date(article.publishDate).toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </span>
        </div>
      </div>

      <img src={article.imageUrl} alt={article.title} className="article-main-image" />

      <div className="article-body">
        <p>{article.content}</p>
      </div>

      <div className="article-tags">
        {article.tags?.map(tag => (
          <span key={tag} className="tag">#{tag}</span>
        ))}
      </div>
    </article>
  );
};

export default ArticlePage;
