import React, { createContext, useState, useContext, useEffect } from 'react';
import { signIn, signUp } from '../api/api';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showExitModal, setShowExitModal] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('kanban_token');
    const savedUser = localStorage.getItem('kanban_user');
    if (token && savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        localStorage.removeItem('kanban_user');
        localStorage.removeItem('kanban_token');
      }
    }
    setLoading(false);
  }, []);

  const login = async (login, password) => {
    try {
      setError(null);
      const userData = await signIn({ login, password });
      localStorage.setItem('kanban_token', userData.token);
      localStorage.setItem('kanban_user', JSON.stringify(userData));
      setUser(userData);
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    }
  };

  const register = async (login, password, name) => {
    try {
      setError(null);
      const userData = await signUp({ login, password, name });
      localStorage.setItem('kanban_token', userData.token);
      localStorage.setItem('kanban_user', JSON.stringify(userData));
      setUser(userData);
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('kanban_token');
    localStorage.removeItem('kanban_user');
    setUser(null);
    setShowExitModal(false);
  };

  const openExitModal = () => setShowExitModal(true);
  const closeExitModal = () => setShowExitModal(false);

  const value = {
    user,
    isAuthenticated: !!user,
    loading,
    error,
    showExitModal,
    login,
    register,
    logout,
    openExitModal,
    closeExitModal,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};