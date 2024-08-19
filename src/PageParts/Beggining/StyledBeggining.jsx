import styled from "styled-components";
import background from "../../assets/perfil.png";

export const StyledBeggining = styled.div`
  position: relative;
  width: 100vw;
  height: 120vh;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 20%;
`;

export const StyledHeader = styled.header`
  width: 100vw;
  height: 25vh;
  background-color: #fdf7e7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 4rem;
`;

export const StyledOptionsDiv = styled.nav`
  display: flex;
  align-items: end;
  gap: 2rem;
  width: auto;
  height: 65%;
  font-weight: 100;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const StyledNavOption = styled.h2`
  font-size: 1rem;
  font-weight: 400;
`;

export const StyledTitleDiv = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1000px) {
    font-size: 0.8rem;
    top: 39%;
    left: 28%;
    transform: translate(-50%, -50%);
    width: 44vw;
    max-width: 300px;
  }
  @media (min-width: 1001px) and (max-width: 1200px) {
    font-size: 1.6rem;

    top: 44%;
    left: 30%;
    transform: translate(-50%, -50%);
    width: 44vw;
  }
  position: absolute;
  font-size: 1.6rem;

  top: 58%;
  left: 28%;
  transform: translate(-50%, -50%);
  width: 44vw;
  height: auto;
`;

export const StyledTitle = styled.h2`
  /* @media (max-width: 1000px) {
    font-size: 1.3rem;
  } */
  /* font-size: 1.5rem; */
  font-weight: 400;
  text-align: center;
`;

export const StyledButton = styled.button`
  @media (max-width: 400px) {
    /* width: 35vw; */
  }
  /* min-width: 200px; */
  /* width: 15vw; */
  height: auto;
  background-color: #a4bd2e;
  border: none;
  padding: 0.7rem;
  /* font-size: 0.8rem; */
`;
