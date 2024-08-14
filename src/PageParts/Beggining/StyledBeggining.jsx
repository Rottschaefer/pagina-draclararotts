import styled from "styled-components";
import background from "../../assets/perfil.png";

export const StyledBeggining = styled.div`
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
