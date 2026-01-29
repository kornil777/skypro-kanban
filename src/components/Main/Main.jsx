import React from 'react';
import Column from '../Column/Column';
import { cardList } from '../../data.js'; // Импортируем данные

function Main() {
  // Группируем карточки по статусам
  const groupedCards = cardList.reduce((groups, card) => {
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
          <div className="main__content">
            {columnOrder.map((status) => (
              <Column 
                key={status} 
                title={status} 
                cards={groupedCards[status] || []} 
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;