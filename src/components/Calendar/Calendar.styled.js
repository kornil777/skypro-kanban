// src/components/Calendar/Calendar.styled.js
import styled from 'styled-components';

export const CalendarContainer = styled.div`
  width: 182px;
  margin-bottom: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 340px;
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;

export const CalendarTitle = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  line-height: 1;
  margin-bottom: 14px;
  padding: 0 7px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0;
  }
`;

export const CalendarBlock = styled.div`
  display: block;
`;

export const CalendarMonth = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  line-height: 25px;
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
`;

export const CalendarContent = styled.div`
  margin-bottom: 12px;
`;

export const CalendarDaysNames = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0;
  }
`;

export const CalendarDayName = styled.div`
  color: ${({ theme, $weekend }) => 
    $weekend ? theme.colors.weekend : theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fonts.sizes.xs};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  line-height: normal;
  letter-spacing: -0.2px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fonts.sizes.md};
  }
`;

export const CalendarCells = styled.div`
  width: 182px;
  height: 126px;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 344px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;

export const CalendarCell = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: ${({ theme, $weekend, $active, $otherMonth }) => {
    if ($active) return theme.colors.textLight;
    if ($weekend) return theme.colors.weekend;
    if ($otherMonth) return theme.colors.textSecondary;
    return theme.colors.textSecondary;
  }};
  font-size: ${({ theme }) => theme.fonts.sizes.xs};
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: ${({ $otherMonth }) => $otherMonth ? 'default' : 'pointer'};
  opacity: ${({ $otherMonth }) => $otherMonth ? 0 : 1};
  font-weight: ${({ $current }) => $current ? 700 : 400};
  background-color: ${({ theme, $active }) => 
    $active ? theme.colors.textSecondary : 'transparent'};

  &:hover {
    color: ${({ theme, $otherMonth }) => 
      $otherMonth ? theme.colors.textSecondary : theme.colors.textSecondary};
    background-color: ${({ theme, $otherMonth }) => 
      $otherMonth ? 'transparent' : theme.colors.backgroundGray};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 42px;
    height: 42px;
    font-size: ${({ theme }) => theme.fonts.sizes.md};
  }
`;

export const CalendarNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0;
  }
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavAction = styled.div`
  width: 18px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${({ theme }) => theme.colors.textSecondary};
    transition: fill ${({ theme }) => theme.animations.transition};

    &:hover {
      fill: ${({ theme }) => theme.colors.textPrimary};
    }
  }
`;

export const CalendarPeriod = styled.div`
  padding: 0 7px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0;
  }
`;

export const CalendarParagraph = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fonts.sizes.xs};
  line-height: 1;

  span {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fonts.sizes.md};
  }
`;