import styled from 'styled-components';

export const PopExitContainer = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;

  &:target {
    display: block;
  }
`;

export const PopExitInner = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.overlay};
`;

export const PopExitBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.large};
  border: 0.7px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 50px 20px;
  }
`;

export const PopExitTitle = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.sizes.xl};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  line-height: 30px;
  letter-spacing: -0.4px;
  margin-bottom: 20px;
`;

export const PopExitForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    display: block;
  }
`;

export const PopExitButton = styled.button`
  width: 153px;
  height: 30px;
  background-color: ${({ theme, $secondary }) => 
    $secondary ? 'transparent' : theme.colors.primary};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.small};
  border: ${({ theme, $secondary }) => 
    $secondary ? `0.7px solid ${theme.colors.primary}` : 'none'};
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  line-height: 21px;
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  letter-spacing: -0.14px;
  color: ${({ theme, $secondary }) => 
    $secondary ? theme.colors.primary : theme.colors.textLight};
  margin-right: 10px;
  cursor: pointer;
  transition: all ${({ theme }) => theme.animations.transition};

  &:hover {
    background-color: ${({ theme, $secondary }) => 
      $secondary ? theme.colors.primaryHover : theme.colors.primaryHover};
    color: ${({ theme }) => theme.colors.textLight};
    
    a {
      color: ${({ theme }) => theme.colors.textLight};
    }
  }

  a {
    width: 100%;
    height: 100%;
    color: ${({ theme, $secondary }) => 
      $secondary ? theme.colors.primary : theme.colors.textLight};
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    width: 100%;
    height: 40px;
    margin-right: 0;
    margin-bottom: ${({ $secondary }) => $secondary ? '0' : '10px'};
  }
`;