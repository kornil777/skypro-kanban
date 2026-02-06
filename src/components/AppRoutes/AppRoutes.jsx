import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import LoginPage from '../../pages/LoginPage/LoginPage';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import MainPage from '../../pages/MainPage/MainPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {/* Редирект с корня на главную или логин в зависимости от авторизации */}
      <Route 
        path="/" 
        element={
          isAuthenticated ? 
          <Navigate to="/main" /> : 
          <Navigate to="/login" />
        } 
      />
      
      {/* Публичные маршруты */}
      <Route 
        path="/login" 
        element={
          isAuthenticated ? 
          <Navigate to="/main" /> : 
          <LoginPage />
        } 
      />
      <Route 
        path="/register" 
        element={
          isAuthenticated ? 
          <Navigate to="/main" /> : 
          <RegisterPage />
        } 
      />
      
      {/* Защищенные маршруты */}
      <Route element={<ProtectedRoute />}>
        <Route path="/main" element={<MainPage />} />
        {/* Здесь позже добавятся другие защищенные маршруты */}
      </Route>
      
      {/* Маршрут 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;