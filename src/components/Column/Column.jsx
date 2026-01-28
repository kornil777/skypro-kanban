import React from 'react';
import Card from '../Card/Card';

function Column({ title, cardsCount }) {
  const cards = Array(cardsCount).fill(null);

  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {cards.map((_, index) => (
          <Card key={index} title="Название задачи" category="Web Design" date="30.10.23" />
        ))}
      </div>
    </div>
  );
}

export default Column;