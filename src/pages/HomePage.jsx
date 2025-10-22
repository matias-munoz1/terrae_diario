// src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import ArticleCard from '../components/ArticleCard';
import FeaturedGrid from '../components/FeaturedGrid';
import NewsCarousel from '../components/NewsCarousel';
import { articlesData } from '../data/articles';
import './HomePage.css';

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [featuredArticles, setFeaturedArticles] = useState([]);
  const [categorySections, setCategorySections] = useState([]);

  useEffect(() => {
    // Ordenar todos los artículos por fecha descendente
    const sorted = [...articlesData].sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));

    // Tomar los 3 primeros como featured
    setFeaturedArticles(sorted.slice(0, 3));

    // Tomar las siguientes 6 como 'Últimas Noticias'
    setArticles(sorted.slice(3, 3 + 6));

    // Generar secciones por categoría DINÁMICAMENTE (detectar todas las categorías)
    // 1. Agrupar artículos por categoría
    const categoryMap = {};
    articlesData.forEach(article => {
      const cat = article.category;
      if (cat) {
        if (!categoryMap[cat]) {
          categoryMap[cat] = [];
        }
        categoryMap[cat].push(article);
      }
    });

    // 2. Convertir a array de objetos { category, articles } y ordenar artículos por fecha (desc)
    const grouped = Object.keys(categoryMap).map(cat => {
      const items = categoryMap[cat].sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
      return { category: cat, articles: items };
    });

    // 3. Ordenar las categorías por la fecha del artículo más reciente en cada una (desc)
    grouped.sort((a, b) => {
      const aDate = new Date(a.articles[0].publishDate);
      const bDate = new Date(b.articles[0].publishDate);
      return bDate - aDate;
    });

    // 4. Tomar máximo 3 secciones (las categorías con artículos más recientes)
    setCategorySections(grouped.slice(0, 3));
  }, []);

  return (
    <div className="homepage">
      {/* Sección destacada con grid de 3 columnas */}
      {featuredArticles.length >= 3 && (
        <section className="featured-section">
          <FeaturedGrid 
            mainArticle={featuredArticles[0]} 
            sideArticles={[featuredArticles[1], featuredArticles[2]]} 
          />
        </section>
      )}

      {/* Grid de noticias */}
      {/* Secciones por categoría: se generan dinámicamente según últimas noticias */}
      {categorySections.length > 0 && (
        <section className="category-sections">
          {categorySections.map((sec, index) => (
            <article key={sec.category} className="editorial-section">
              <div className="section-header">
                <h2 className="editorial-title">{sec.category}</h2>
                <div className="title-line"></div>
              </div>
              
              <div className="editorial-grid">
                {/* Artículo principal */}
                {sec.articles[0] && (
                  <div className="editorial-main">
                    <div className="editorial-image-wrapper">
                      <img 
                        src={sec.articles[0].imageUrl} 
                        alt={sec.articles[0].title}
                        className="editorial-image"
                      />
                      <span className="editorial-badge">{sec.articles[0].category}</span>
                    </div>
                    <div className="editorial-content">
                      <h3 className="editorial-headline">{sec.articles[0].title}</h3>
                      <p className="editorial-excerpt">{sec.articles[0].subtitle}</p>
                      <div className="editorial-meta">
                        <span className="editorial-author">Por {sec.articles[0].author}</span>
                        <span className="editorial-separator">•</span>
                        <span className="editorial-date">
                          {new Date(sec.articles[0].publishDate).toLocaleDateString('es-ES', { 
                            day: 'numeric', 
                            month: 'long', 
                            year: 'numeric' 
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Artículos secundarios */}
                <div className="editorial-sidebar">
                  {sec.articles.slice(1, 3).map(article => (
                    <div key={article.id} className="editorial-secondary">
                      <div className="secondary-image-wrapper">
                        <img 
                          src={article.imageUrl} 
                          alt={article.title}
                          className="secondary-image"
                        />
                      </div>
                      <div className="secondary-content">
                        <h4 className="secondary-headline">{article.title}</h4>
                        <div className="secondary-meta">
                          <span className="secondary-author">{article.author}</span>
                          <span className="editorial-separator">•</span>
                          <span className="secondary-date">
                            {new Date(article.publishDate).toLocaleDateString('es-ES', { 
                              day: 'numeric', 
                              month: 'short' 
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>
      )}
      <section className="news-grid">
        <h2 className="section-title">Últimas Noticias</h2>
        <NewsCarousel articles={articles} />
      </section>
    </div>
  );
};

export default HomePage;
