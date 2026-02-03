import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.backgroundGray};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const NotFoundContent = styled.div`
  text-align: center;
  max-width: 500px;
  width: 100%;
`;

export const NotFoundTitle = styled.h1`
  font-size: 120px;
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
  line-height: 1;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 80px;
  }
`;

export const NotFoundText = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.xl};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 30px;
`;

export const NotFoundButton = styled.button`
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.small};
  color: ${({ theme }) => theme.colors.textLight};
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;