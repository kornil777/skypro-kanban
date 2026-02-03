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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const success = await login(email, password);
      if (success) {
        navigate('/');
      }
    } catch (err) {
      setError('Неверный email или пароль');
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginContainer>
      <LoginBlock>
        <LoginTitle>
          <h2>Вход</h2>
        </LoginTitle>
        
        {error && (
          <div style={{ 
            color: 'red', 
            marginBottom: '15px', 
            textAlign: 'center' 
          }}>
            {error}
          </div>
        )}

        <LoginForm onSubmit={handleSubmit}>
          <LoginInput
            type="email"
            placeholder="Эл. почта"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <LoginInput
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <LoginButton 
            type="submit" 
            className="_hover01"
            disabled={loading}
          >
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