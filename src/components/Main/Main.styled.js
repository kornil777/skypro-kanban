import styled, { keyframes } from 'styled-components';
import { media } from '..//../styles/styledUtils'; 

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const MainContainer = styled.main`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundGray};
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;

  ${media.xl(`
    display: block;
  `)}
`;

export const Column = styled.div`
  width: 20%;
  margin: 0 auto;
  display: block;

  ${media.xl(`
    width: 100%;
    margin: 0 auto;
    display: block;
  `)}
`;

export const ColumnTitle = styled.div`
  padding: 0 10px;
  margin: 15px 0;
`;

export const ColumnTitleText = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  line-height: 1;
  text-transform: uppercase;
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 100%;
`;

export const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 20px;

  ${media.lg(`
    width: 40px;
    height: 40px;
    border-width: 3px;
  `)}
`;

export const LoadingText = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  text-align: center;
  margin: 0;

  ${media.lg(`
    font-size: 16px;
  `)}
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 100%;
  padding: 20px;
  text-align: center;
`;

export const ErrorText = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
  color: ${({ theme }) => theme.colors.error};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  margin-bottom: 20px;

  ${media.lg(`
    font-size: 16px;
  `)}
`;

export const RetryButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textLight};
  border: none;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.small};
  padding: 12px 24px;
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.animations.transition}
    ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }

  ${media.lg(`
    padding: 10px 20px;
    font-size: 13px;
  `)}
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.sizes.container};
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;

  ${media.sm(`
    width: 100%;
    padding: 0 16px;
  `)}
`;
