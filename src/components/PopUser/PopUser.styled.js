// src/components/PopUser/PopUser.styled.js
import styled from 'styled-components';

export const PopUserSet = styled.div`
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.large};
  border: 0.7px solid ${({ theme }) => theme.colors.borderLight};
  background: ${({ theme }) => theme.colors.backgroundLight};
  box-shadow: ${({ theme }) => theme.colors.shadow};
  padding: 34px;
  text-align: center;
  z-index: 2;
`;

export const PopUserName = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;

export const PopUserMail = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;

export const PopUserTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const PopUserThemeText = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  line-height: 21px;
  letter-spacing: -0.14px;
`;

export const PopUserThemeCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: relative;
  width: 24px;
  height: 13px;
  border-radius: 100px;
  background: ${({ theme }) => theme.colors.backgroundGray};
  outline: none;
  appearance: none;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.textSecondary};
    transition: 0.5s;
  }

  &:checked {
    &::before {
      left: 12px;
    }
  }
`;

export const PopUserExitButton = styled.button`
  width: 72px;
  height: 30px;
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.small};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: all ${({ theme }) => theme.animations.transition};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
    color: ${({ theme }) => theme.colors.textLight};
    
    a {
      color: ${({ theme }) => theme.colors.textLight};
    }
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }
`;