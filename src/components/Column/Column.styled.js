import styled from 'styled-components';

export const ColumnContainer = styled.div`
  width: 20%;
  margin: 0 auto;
  display: block;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    width: 100%;
    margin: 0 auto;
    display: block;
  }
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

export const CardsContainer = styled.div`
  width: 100%;
  display: block;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    width: 100%;
    display: flex;
    overflow-y: auto;
  }
`;