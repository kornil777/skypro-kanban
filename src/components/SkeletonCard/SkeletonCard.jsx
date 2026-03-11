import React from 'react';
import styled, { keyframes } from 'styled-components';


const pulse = keyframes`
  0% {
    background-color: rgba(193, 205, 220, 0.5);
  }
  50% {
    background-color: rgba(233, 238, 247, 0.8);
  }
  100% {
    background-color: rgba(193, 205, 220, 0.5);
  }
`;

const SkeletonCardContainer = styled.div`
  width: 220px;
  height: 130px;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 10px;
  padding: 15px 13px 19px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
`;

const SkeletonHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const SkeletonCategory = styled.div`
  width: 80px;
  height: 20px;
  border-radius: 18px;
  background-color: rgba(193, 205, 220, 0.5);
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

const SkeletonDots = styled.div`
  display: flex;
  gap: 3px;
`;

const SkeletonDot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: rgba(193, 205, 220, 0.5);
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

const SkeletonTitle = styled.div`
  width: 80%;
  height: 14px;
  margin-bottom: 10px;
  border-radius: 4px;
  background-color: rgba(193, 205, 220, 0.5);
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

const SkeletonDate = styled.div`
  width: 60%;
  height: 10px;
  border-radius: 4px;
  background-color: rgba(193, 205, 220, 0.5);
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

function SkeletonCard() {
  return (
    <SkeletonCardContainer>
      <SkeletonHeader>
        <SkeletonCategory />
        <SkeletonDots>
          <SkeletonDot />
          <SkeletonDot />
          <SkeletonDot />
        </SkeletonDots>
      </SkeletonHeader>
      <SkeletonTitle />
      <SkeletonDate />
    </SkeletonCardContainer>
  );
}

export default SkeletonCard;