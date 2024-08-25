import styled from "styled-components";
import { IoMdPin } from "react-icons/io";

export const StyledPin = styled(IoMdPin)`
  width: 20px;
  height: auto;
`;

export const StyledServices = styled.div`
  padding: 3rem;
  color: #fdf7e7;

  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: auto;
  background-color: #737373;
`;

export const StyledInfoDiv = styled.div`
  flex-wrap: wrap;

  display: flex;
  justify-content: space-around;
  align-items: start;
  /* gap: 60px; */
  width: 80%;
  height: auto;
`;

export const StyledContactDiv = styled.div`
  font-weight: 200;
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  justify-content: center;
  height: auto;
  margin-bottom: 2rem;
  width: 40%;
  min-width: 250px;
`;
export const StyledContactTitle = styled.h1`
  font-size: 1rem;
`;

export const StyledContactInfo = styled.h3`
  font-size: 0.8rem;
  font-weight: 100;
`;

export const StyledMap = styled.iframe`
  width: 30vw;
  height: 20vw;
  min-width: 200px;
  min-height: 200px;
`;
