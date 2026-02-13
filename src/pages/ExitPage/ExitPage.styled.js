import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.backgroundGray};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const PageContent = styled.div`
  max-width: ${({ theme }) => theme.sizes.container};
  width: 100%;
  margin: 0 auto;
`;

export const ExitContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ExitBlock = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.large};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 50px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 500px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 30px 20px;
  }
`;

export const ExitTitle = styled.h1`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 28px;
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  margin-bottom: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 24px;
  }
`;

export const ExitMessage = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  line-height: 1.6;
  margin-bottom: 40px;
`;

export const ExitButtons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

export const ExitButton = styled.button`
  padding: 15px 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textLight};
  border: none;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.small};
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;

export const ExitCancelButton = styled.button`
  padding: 15px 40px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.small};
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textLight};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;