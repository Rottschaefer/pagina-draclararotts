import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

`;

export const StyledBeggining = styled.div`
  @media (max-width: 830px) {
    height: 60vh;
  }
  @media (max-width: 580px) {
    height: 40vh;
  }
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;
  /* min-height: 32vh; */
  background-image: linear-gradient(to right, #2a1610, #612d00);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 60% 0%;
  overflow: hidden;
`;

export const StyledTitleDiv = styled.div`
  @media (max-width: 580px) {
    width: 55vw;
    left: 33%;
  }
  color: #fdf7e7;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: clamp(0.7rem, 1.7vw, 1rem);
  position: absolute;

  top: clamp(40%, 20vw, 50%);
  left: 27%;
  transform: translate(-50%, -50%);
  width: 48vw;
  height: auto;
`;

export const StyledTitle = styled.h2`
  @media (max-width: 400px) {
    letter-spacing: 5px;
  }
  letter-spacing: 11px;
  font-weight: 400;
  text-align: center;
  margin: 0;
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 830px) {
    /* width: 20vw; */
  }
  @media (max-width: 580px) {
    height: 5vh;
    width: 35vw;
  }
  letter-spacing: 3px;
  font-size: clamp(0.7rem, 2.5vw, 0.7rem);
  height: 7vh;
  width: auto;
  /* min-width: 200px; */
  background-color: #d7be98;
  border: none;
  padding: 10px;
  margin-top: 48px;
  color: black;
  cursor: pointer;
`;

export const StyledBackImg = styled.img`
  width: auto;
  height: 120%;
  object-fit: cover;
  position: absolute;
  left: 50%;
  bottom: -10%;
`;

export const StyledWidgetDiv = styled.div`
  opacity: 1;

  position: fixed;
  left: 50%;
  top: 50%;
  height: 85vh;
  width: 90vw;
  transform: translate(-50%, -50%);
  z-index: 5;
  overflow: auto;
  transition: all 1s;
  animation: ${fadeIn} 1s ease-in-out;
`;

export const StyledBackWidgetDiv = styled.div`
  background-color: black;
  opacity: 0.6;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 4;
  animation: ${fadeIn} 0.5s ease-in-out;
`;
