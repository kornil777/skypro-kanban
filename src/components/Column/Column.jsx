import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../../constants/dndTypes';
import { useTasks } from '../../context/TasksContext';
import Card from '../Card/Card';
import SkeletonCard from '../SkeletonCard/SkeletonCard';
import {
  ColumnContainer,
  ColumnTitle,
  ColumnTitleText,
  CardsContainer
} from './Column.styled';

function Column({ title, cards, isLoading }) {
  const { updateTask } = useTasks();

  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: ItemTypes.CARD,
    drop: (item) => {
      if (item.status !== title) {
        const updatedTask = {
          ...item,
          status: title,
        };
        updateTask(item.id, updatedTask);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <ColumnContainer ref={dropRef}>
      <ColumnTitle>
        <ColumnTitleText>{title}</ColumnTitleText>
      </ColumnTitle>
      <CardsContainer>
        {isLoading ? (
          // Показываем 3 скелетона для имитации загрузки
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        ) : (
          cards.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              category={card.theme}
              date={card.date}
              status={card.status}
              description={card.description}
            />
          ))
        )}
      </CardsContainer>
    </ColumnContainer>
  );
}

export default Column;