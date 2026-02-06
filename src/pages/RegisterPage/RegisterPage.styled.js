import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RegisterContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.backgroundGray};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const RegisterBlock = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.large};
  border: 0.7px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 40px 20px;
  }
`;

export const RegisterTitle = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.sizes.xl};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  line-height: 30px;
  letter-spacing: -0.4px;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const RegisterInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 15px;
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.medium};
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const RegisterButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.small};
  color: ${({ theme }) => theme.colors.textLight};
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const RegisterFormGroup = styled.div`
  text-align: center;
  margin-top: 10px;

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.fonts.sizes.sm};
  }
`;

export const RegisterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryHover};
    text-decoration: underline;
  }
`;