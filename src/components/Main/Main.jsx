import React, { useState, useEffect } from "react";
import ColumnComponent from "../Column/Column.jsx";
import {
  MainContainer,
  MainBlock,
  MainContent,
  LoadingContainer,
  LoadingSpinner,
  LoadingText,
  ErrorContainer,
  ErrorText,
  RetryButton,
  Container,
} from "./Main.styled.js";

function Main() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Имитируем загрузку данных с сервера
  useEffect(() => {
    const loadCards = async () => {
      try {
        // Имитация задержки загрузки (2 секунды)
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Импортируем данные (имитация API запроса)
        const { cardList } = await import("../../data.js");

        setCards(cardList);
        setIsLoading(false);
      } catch (err) {
        setError("Ошибка при загрузке данных");
        setIsLoading(false);
        console.error("Ошибка загрузки:", err);
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
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  return (
    <MainContainer>
      <Container>
        <MainBlock>
          {isLoading ? (
            // Показываем индикатор загрузки
            <LoadingContainer>
              <LoadingSpinner />
              <LoadingText>Данные загружаются...</LoadingText>
            </LoadingContainer>
          ) : error ? (
            // Показываем ошибку
            <ErrorContainer>
              <ErrorText>{error}</ErrorText>
              <RetryButton
                className="_hover01"
                onClick={() => window.location.reload()}
              >
                Попробовать снова
              </RetryButton>
            </ErrorContainer>
          ) : (
            // Показываем контент после загрузки
            <MainContent>
              {columnOrder.map((status) => (
                <ColumnComponent
                  key={status}
                  title={status}
                  cards={groupedCards[status] || []}
                />
              ))}
            </MainContent>
          )}
        </MainBlock>
      </Container>
    </MainContainer>
  );
}

export default Main;
