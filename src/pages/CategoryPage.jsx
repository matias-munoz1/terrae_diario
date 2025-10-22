// src/pages/CategoryPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';
import { articlesData } from '../data/articles';
import './CategoryPage.css';

const CategoryPage = () => {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const filtered = articlesData.filter(
      article => article.category.toLowerCase() === category.toLowerCase()
    );
    setArticles(filtered);
  }, [category]);

  return (
    <div className="category-page">
      <div className="category-header">
        <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
        <p>Todas las noticias de {category}</p>
      </div>
      
      <div className="category-articles">
        {articles.length > 0 ? (
          articles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))
        ) : (
          <p>No hay noticias en esta categoría.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;  // ⬅️ ESTA LÍNEA ES CRUCIAL
