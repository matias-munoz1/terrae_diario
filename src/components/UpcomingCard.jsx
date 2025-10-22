import React from 'react';
import { Link } from 'react-router-dom';
import './UpcomingCard.css';

const UpcomingCard = ({ items = [] }) => {
  return (
    <aside className="upcoming-card">
      <h3 className="upcoming-title">Próximas noticias</h3>
      <ul className="upcoming-list">
        {items.map((it) => (
          <li key={it.id} className="upcoming-item">
            <Link to={it.link || '#'} className="upcoming-link">
              <div
                className="upcoming-thumb"
                style={{ backgroundImage: `url(${it.imageUrl || ''})` }}
              >
                {it.category && <span className="upcoming-badge">{it.category}</span>}
              </div>

              <div className="upcoming-body">
                <strong className="upcoming-head">{it.title}</strong>
                <div className="upcoming-meta">
                  <span className="upcoming-date">{new Date(it.date).toLocaleDateString('es-ES')}</span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default UpcomingCard;
