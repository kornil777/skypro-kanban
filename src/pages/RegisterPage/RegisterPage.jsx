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
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { register, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const success = await register(login, password, name);
      if (success) {
        navigate('/');
      }
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
          <div style={{ color: 'red', marginBottom: '15px', textAlign: 'center' }}>
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
            disabled={loading}
          />
          <RegisterInput
            type="text"
            placeholder="Логин"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
            disabled={loading}
          />
          <RegisterInput
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
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