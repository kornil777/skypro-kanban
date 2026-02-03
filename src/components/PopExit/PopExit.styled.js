import styled from 'styled-components';

export const PopExitContainer = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const PopExitOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.overlay};
  backdrop-filter: blur(4px);
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
  position: relative;
  z-index: 1001;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 40px 20px;
  }
`;

export const PopExitTitle = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.sizes.xl};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  line-height: 30px;
  letter-spacing: -0.4px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const PopExitForm = styled.div`
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
  height: 40px;
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
  }

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    width: 100%;
    height: 45px;
    margin-right: 0;
    margin-bottom: ${({ $secondary }) => $secondary ? '0' : '10px'};
  }
`;