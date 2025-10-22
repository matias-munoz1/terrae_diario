// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import CategoryPage from './pages/CategoryPage';
import ThemeModal from './components/ThemeModal';
import ThemeSelector from './components/ThemeSelector';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ThemeModal />
        <Header />
        <div className="app">
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/articulo/:id" element={<ArticlePage />} />
              <Route path="/categoria/:category" element={<CategoryPage />} />
            </Routes>
          </main>
        </div>
        <Footer />
        <ThemeSelector />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
