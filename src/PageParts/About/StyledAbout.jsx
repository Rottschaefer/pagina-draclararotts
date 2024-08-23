import styled from "styled-components";

export const StyledAbout = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 3rem;
  width: 100vw;
  height: auto;
  min-height: 100vh;
  background-color: #516c51;
`;

export const StyledPhoto = styled.img`
  width: 350px;
  height: 400px;
  object-fit: cover;
`;

export const StyledDescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: start;
  max-width: 400px;
  width: 80vw;
  min-height: 350px;
`;

export const StyledDescription = styled.p`
  color: #fdf7e7;

  font-family: "Montserrat";
  font-size: clamp(0.8rem, 2vw, 1rem);
  text-align: justify;
  margin: 0;
`;

export const StyledTitle = styled.h2`
  color: #fdf7e7;
  font-size: clamp(1rem, 2vw, 1.3rem);

  margin-bottom: 1.3rem;
  font-weight: 100;
  letter-spacing: 4px;
`;
