import styled from "styled-components";

export const StyledHeader = styled.header`
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  width: 100vw;
  height: ${(props) => (props.isScrolled ? "15vh" : "30vh")};

  background-color: #fdf7e7;
  display: flex;
  justify-content: ${(props) =>
    props.isScrolled ? "center" : "space-between"};
  align-items: center;
  padding: 0rem 2rem;
  z-index: 3;
  transition: all 1s;
  @media (max-width: 600px) {
    height: ${(props) => (props.isScrolled ? "10vh" : "15vh")};

    justify-content: center;
  }
`;

export const StyledOptionsDiv = styled.nav`
  display: ${(props) => (props.isScrolled ? "none" : "flex")};
  align-items: end;
  gap: 2rem;
  width: auto;
  height: 65%;
  font-weight: 100;

  @media (max-width: 600px) {
    display: none;
  }

  transition: all 1s;
`;

export const StyledNavOption = styled.h2`
  font-size: 0.7rem;
  font-weight: 400;
  letter-spacing: 5px;
`;

export const StyledLogo = styled.img`
  @media (max-width: 600px) {
    width: ${(props) => (props.isScrolled ? "120px" : "250px")};
  }
  width: ${(props) => (props.isScrolled ? "180px" : "350px")};
  height: auto;
  transition: all 1s;
`;
