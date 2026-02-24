import axios from 'axios';

const API_URL = 'https://wedev-api.sky.pro/api/user';

// Авторизация
export async function signIn(userData) {
  try {
    const data = await axios.post(API_URL + '/login', userData, {
      headers: { 'Content-Type': '' },
    });
    return data.data.user;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}

export async function signUp({ name, login, password }) {
  try {
    const data = await axios.post(API_URL, { login, name, password }, {
      headers: { 'Content-Type': '' },
    });
    return data.data.user;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}

const TASKS_URL = 'https://wedev-api.sky.pro/api/kanban';

const tasksClient = axios.create({
  baseURL: TASKS_URL,
  headers: { 'Content-Type': '' }, // пустой заголовок
});

tasksClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('kanban_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

tasksClient.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      localStorage.removeItem('kanban_token');
      localStorage.removeItem('kanban_user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const tasksAPI = {
  getTasks: async () => {
    const response = await tasksClient.get('/');
    return response.data.tasks;
  },
  getTaskById: async (id, options = {}) => {
  const response = await tasksClient.get(`/${id}`, { signal: options.signal });
  return response.data.task;
  },
  createTask: async (taskData) => {
    const response = await tasksClient.post('/', taskData);
    return response.data.tasks;
  },
  updateTask: async (id, taskData) => {
    const response = await tasksClient.put(`/${id}`, taskData);
    return response.data.tasks;
  },
  deleteTask: async (id) => {
    const response = await tasksClient.delete(`/${id}`);
    return response.data.tasks;
  },
};