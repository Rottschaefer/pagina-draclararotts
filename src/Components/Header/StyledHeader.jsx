import styled from "styled-components";

export const StyledHeader = styled.header`
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  width: 100vw;
  height: ${(props) => (props.isScrolled ? "15vh" : "25vh")};
  background-color: #fdf7e7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 2rem;
  z-index: 3;
  transition: all 1s;
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
