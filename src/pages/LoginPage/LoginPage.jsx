import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  LoginContainer,
  LoginBlock,
  LoginTitle,
  LoginForm,
  LoginInput,
  LoginButton,
  LoginFormGroup,
  LoginLink
} from './LoginPage.styled';

const LoginPage = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login: authLogin, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const success = await authLogin(login, password);
      if (success) {
        navigate('/');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginContainer>
      <LoginBlock>
        <LoginTitle><h2>Вход</h2></LoginTitle>
        {error && <div style={{ color: 'red', marginBottom: '15px' }}>{error}</div>}
        <LoginForm onSubmit={handleSubmit}>
          <LoginInput
            type="text"
            placeholder="Логин"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
            disabled={loading}
          />
          <LoginInput
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
          />
          <LoginButton type="submit" disabled={loading}>
            {loading ? 'Вход...' : 'Войти'}
          </LoginButton>
          <LoginFormGroup>
            <p>Нужно зарегистрироваться?</p>
            <LoginLink to="/register">Регистрируйтесь здесь</LoginLink>
          </LoginFormGroup>
        </LoginForm>
      </LoginBlock>
    </LoginContainer>
  );
};

export default LoginPage;