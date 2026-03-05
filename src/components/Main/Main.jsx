import React, { useEffect } from "react";
import { useTasks } from "../../context/TasksContext";
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
  EmptyBoardMessage, // добавим новый стилизованный компонент
} from "./Main.styled.js";

function Main() {
  const { tasks, loading, error, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  // Группируем карточки по статусам
  const groupedTasks = tasks.reduce((groups, task) => {
    if (!groups[task.status]) {
      groups[task.status] = [];
    }
    groups[task.status].push({
      id: task._id,
      title: task.title,
      theme: task.topic,
      date: task.date, // исходная ISO-дата
      status: task.status,
      description: task.description,
    });
    return groups;
  }, {});

  const columnOrder = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  if (loading && tasks.length === 0) {
    return (
      <MainContainer>
        <Container>
          <MainBlock>
            <LoadingContainer>
              <LoadingSpinner />
              <LoadingText>Загрузка задач...</LoadingText>
            </LoadingContainer>
          </MainBlock>
        </Container>
      </MainContainer>
    );
  }

  if (error) {
    return (
      <MainContainer>
        <Container>
          <MainBlock>
            <ErrorContainer>
              <ErrorText>{error}</ErrorText>
              <RetryButton onClick={() => loadTasks()}>
                Попробовать снова
              </RetryButton>
            </ErrorContainer>
          </MainBlock>
        </Container>
      </MainContainer>
    );
  }

  // Если задач нет — показываем сообщение
  if (tasks.length === 0) {
    return (
      <MainContainer>
        <Container>
          <MainBlock>
            <EmptyBoardMessage>Новых задач нет</EmptyBoardMessage>
          </MainBlock>
        </Container>
      </MainContainer>
    );
  }

  return (
    <MainContainer>
      <Container>
        <MainBlock>
          <MainContent>
            {columnOrder.map((status) => (
              <ColumnComponent
                key={status}
                title={status}
                cards={groupedTasks[status] || []}
              />
            ))}
          </MainContent>
        </MainBlock>
      </Container>
    </MainContainer>
  );
}

export default Main;
