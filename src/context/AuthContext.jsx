import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showExitModal, setShowExitModal] = useState(false);

  useEffect(() => {
    // Проверяем, есть ли данные пользователя в localStorage при загрузке
    const savedUser = localStorage.getItem('kanban_user');
    const savedAuth = localStorage.getItem('kanban_isAuthenticated');
    
    if (savedUser && savedAuth === 'true') {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
    
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Временная логика - в реальном приложении здесь будет запрос к API
    const mockUser = {
      email,
      name: email.split('@')[0],
      id: Date.now()
    };
    
    localStorage.setItem('kanban_user', JSON.stringify(mockUser));
    localStorage.setItem('kanban_isAuthenticated', 'true');
    setUser(mockUser);
    setIsAuthenticated(true);
    return true;
  };

  const register = (email, password, name) => {
    // Временная логика - в реальном приложении здесь будет запрос к API
    const mockUser = {
      email,
      name: name || email.split('@')[0],
      id: Date.now()
    };
    
    localStorage.setItem('kanban_user', JSON.stringify(mockUser));
    localStorage.setItem('kanban_isAuthenticated', 'true');
    setUser(mockUser);
    setIsAuthenticated(true);
    return true;
  };

  const logout = () => {
    localStorage.removeItem('kanban_user');
    localStorage.removeItem('kanban_isAuthenticated');
    setUser(null);
    setIsAuthenticated(false);
    setShowExitModal(false);
  };

  const openExitModal = () => {
    setShowExitModal(true);
  };

  const closeExitModal = () => {
    setShowExitModal(false);
  };

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      user,
      showExitModal,
      login,
      register,
      logout,
      openExitModal,
      closeExitModal,
      loading
    }}>
      {children}
    </AuthContext.Provider>
  );
};