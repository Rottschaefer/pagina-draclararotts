import styled, { keyframes } from "styled-components";

const logoMove = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(6px);
  }
  100% {
    transform: translateY(0);
  }
`;
export const Icon = styled.img`
  color: green;
  width: auto;
  height: 15vh;

  @media (max-width: 600px) {
    height: 10vh;
  }
`;

export const StyledDiv = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 2;
  border-radius: 10px;
  animation: ${logoMove} 3s ease-in-out infinite;
`;
