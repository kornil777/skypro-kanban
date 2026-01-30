import React, { useState, useEffect } from 'react';
import Column from '../Column/Column';
import './Main.css'; // Добавим CSS для стилизации загрузки

function Main() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Имитируем загрузку данных с сервера
  useEffect(() => {
    const loadCards = async () => {
      try {
        // Имитация задержки загрузки (2 секунды)
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Импортируем данные (имитация API запроса)
        const { cardList } = await import('../../data.js');
        
        setCards(cardList);
        setIsLoading(false);
      } catch (err) {
        setError('Ошибка при загрузке данных');
        setIsLoading(false);
        console.error('Ошибка загрузки:', err);
      }
    };

    loadCards();
  }, []);

  // Группируем карточки по статусам
  const groupedCards = cards.reduce((groups, card) => {
    if (!groups[card.status]) {
      groups[card.status] = [];
    }
    groups[card.status].push(card);
    return groups;
  }, {});

  // Определяем порядок колонок
  const columnOrder = [
    'Без статуса', 
    'Нужно сделать', 
    'В работе', 
    'Тестирование', 
    'Готово'
  ];

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          {isLoading ? (
            // Показываем индикатор загрузки
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p className="loading-text">Данные загружаются...</p>
            </div>
          ) : error ? (
            // Показываем ошибку
            <div className="error-container">
              <p className="error-text">{error}</p>
              <button 
                className="retry-button _hover01" 
                onClick={() => window.location.reload()}
              >
                Попробовать снова
              </button>
            </div>
          ) : (
            // Показываем контент после загрузки
            <div className="main__content">
              {columnOrder.map((status) => (
                <Column 
                  key={status} 
                  title={status} 
                  cards={groupedCards[status] || []} 
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Main;