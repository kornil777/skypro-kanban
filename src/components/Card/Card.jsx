import React from 'react';

function Card({ id, title, category, date }) {
  const categoryClass = category === 'Web Design' ? '_orange' : 
                        category === 'Research' ? '_green' : '_purple';

  // Функция для преобразования даты из формата DD.MM.YYYY в DD.MM.YY
  const formatDate = (dateString) => {
    if (!dateString) return '30.10.23';
    
    // Если дата уже в формате DD.MM.YY
    if (dateString.length === 8) return dateString;
    
    // Если дата в формате DD.MM.YYYY
    if (dateString.length === 10) {
      const [day, month, year] = dateString.split('.');
      return `${day}.${month}.${year.slice(2)}`;
    }
    
    return '30.10.23';
  };

  const formattedDate = formatDate(date);

  return (
    <div className="cards__item">
      <div className="cards__card card">
        <div className="card__group">
          <div className={`card__theme ${categoryClass}`}>
            <p className={categoryClass}>{category}</p>
          </div>
          <a href="#popBrowse" target="_self" rel="noopener noreferrer">
            <div className="card__btn">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </a>
        </div>
        <div className="card__content">
          <a href={`#task-${id}`} target="_blank" rel="noopener noreferrer">
            <h3 className="card__title">{title}</h3>
          </a>
          <div className="card__date">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
              <g clipPath="url(#clip0_1_415)">
                <path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinejoin="round" />
                <path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_1_415">
                  <rect width="13" height="13" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p>{formattedDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;