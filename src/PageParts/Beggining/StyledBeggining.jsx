import styled from "styled-components";
import background from "../../assets/perfil-2.png";

export const StyledBeggining = styled.div`
  position: relative;
  width: 100vw;
  height: 120vh;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 60% 20%;
`;

export const StyledTitleDiv = styled.div`
  /* @media (max-width: 550px) {
    font-size: 0.9rem;
  }
  @media (min-width: 550px) {
    font-size: 1rem;
  } */
  color: #fdf7e7;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: clamp(1rem, 2.5vw, 1.7rem);
  position: absolute;

  top: 33%;
  left: 31%;
  transform: translate(-50%, -50%);
  width: 55vw;
  height: auto;
`;

export const StyledTitle = styled.h2`
  /* white-space: nowrap; */
  font-weight: 400;
  text-align: center;
  margin: 0;
`;

export const StyledButton = styled.button`
  font-size: clamp(0.7rem, 2.5vw, 0.8rem);
  height: auto;
  background-color: #d7be98;
  border: none;
  padding: 1rem;
  margin-top: 1rem;
`;
