import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  RegisterContainer,
  RegisterBlock,
  RegisterTitle,
  RegisterForm,
  RegisterInput,
  RegisterButton,
  RegisterFormGroup,
  RegisterLink
} from './RegisterPage.styled';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Простая валидация
      if (!name.trim()) {
        throw new Error('Введите имя');
      }
      if (!email.trim()) {
        throw new Error('Введите email');
      }
      if (password.length < 6) {
        throw new Error('Пароль должен содержать минимум 6 символов');
      }

      const success = await register(email, password, name);
      if (success) {
        navigate('/');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <RegisterContainer>
      <RegisterBlock>
        <RegisterTitle>
          <h2>Регистрация</h2>
        </RegisterTitle>
        
        {error && (
          <div style={{ 
            color: 'red', 
            marginBottom: '15px', 
            textAlign: 'center' 
          }}>
            {error}
          </div>
        )}

        <RegisterForm onSubmit={handleSubmit}>
          <RegisterInput
            type="text"
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <RegisterInput
            type="email"
            placeholder="Эл. почта"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <RegisterInput
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <RegisterButton 
            type="submit" 
            className="_hover01"
            disabled={loading}
          >
            {loading ? 'Регистрация...' : 'Зарегистрироваться'}
          </RegisterButton>
          
          <RegisterFormGroup>
            <p>Уже есть аккаунт? <RegisterLink to="/login">Войдите здесь</RegisterLink></p>
          </RegisterFormGroup>
        </RegisterForm>
      </RegisterBlock>
    </RegisterContainer>
  );
};

export default RegisterPage;