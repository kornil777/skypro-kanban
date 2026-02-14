import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
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
} from "./Main.styled.js";

function Main() {
  const location = useLocation();
  const { tasks, loading, error, loadTasks } = useTasks();

  useEffect(() => {
    // Загружаем задачи при монтировании и при изменении пути (например, после возврата с модалки)
    loadTasks();
  }, [location.pathname, loadTasks]);

  // Группируем карточки по статусам
  const groupedTasks = tasks.reduce((groups, task) => {
    if (!groups[task.status]) {
      groups[task.status] = [];
    }
    groups[task.status].push({
      id: task._id,
      title: task.title,
      theme: task.topic,
      date: new Date(task.date).toLocaleDateString('ru-RU'),
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

  if (loading) {
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