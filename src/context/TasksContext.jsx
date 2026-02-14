import React, { createContext, useState, useContext, useCallback } from 'react';
import { tasksAPI } from '../api/api';
import { useAuth } from './AuthContext';

const TasksContext = createContext();

export const useTasks = () => useContext(TasksContext);

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useAuth(); // Чтобы убедиться, что пользователь авторизован

  const loadTasks = useCallback(async () => {
    if (!user) return; // Не загружаем, если не авторизован
    
    setLoading(true);
    setError(null);
    try {
      const tasksData = await tasksAPI.getTasks();
      setTasks(tasksData);
    } catch (err) {
      setError('Не удалось загрузить задачи');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [user]);

  const createTask = async (taskData) => {
    setError(null);
    try {
      const updatedTasks = await tasksAPI.createTask(taskData);
      setTasks(updatedTasks);
      return true;
    } catch (err) {
      setError('Не удалось создать задачу');
      return false;
    }
  };

  const updateTask = async (id, taskData) => {
    setError(null);
    try {
      const updatedTasks = await tasksAPI.updateTask(id, taskData);
      setTasks(updatedTasks);
      return true;
    } catch (err) {
      setError('Не удалось обновить задачу');
      return false;
    }
  };

  const deleteTask = async (id) => {
    setError(null);
    try {
      const updatedTasks = await tasksAPI.deleteTask(id);
      setTasks(updatedTasks);
      return true;
    } catch (err) {
      setError('Не удалось удалить задачу');
      return false;
    }
  };

  const getTaskById = async (id, options = {}) => {
  // Сначала ищем задачу в уже загруженном списке
  const existingTask = tasks.find(task => task._id === id);
  if (existingTask) {
    return existingTask;
  }

  // Если не нашли, запрашиваем с сервера
  try {
    const task = await tasksAPI.getTaskById(id, options);
    return task;
  } catch (err) {
    if (err.response?.status === 404) {
      // Задачи нет на сервере — возвращаем null
      return null;
    }
    throw err;
  }
};

  const value = {
    tasks,
    loading,
    error,
    loadTasks,
    createTask,
    updateTask,
    deleteTask,
    getTaskById,
  };

  return (
    <TasksContext.Provider value={value}>
      {children}
    </TasksContext.Provider>
  );
};