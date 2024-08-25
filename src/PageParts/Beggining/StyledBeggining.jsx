import styled from "styled-components";
import background from "../../assets/perfil-2.png";

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
`;

export const StyledBackImg = styled.img`
  /* @media (max-width: 830px) {
    height: 110%;
  } */
  width: auto; /* Ajuste o intervalo conforme necessário */
  height: 120%;
  object-fit: cover;
  position: absolute;
  left: 50%; /* Ajuste a posição inicial */
  bottom: -10%;
  /* transform: translateX(-50%); */
`;

// export const StyledBackImgDiv = styled.div`
//   position: absolute;
//   left: 50%;
//   bottom: -10%;
//   transform: translateX(-50%);
//   width: clamp(20vw, 40vw, 60vw); /* Reduz gradualmente o tamanho da div */
//   height: auto;
// `;
