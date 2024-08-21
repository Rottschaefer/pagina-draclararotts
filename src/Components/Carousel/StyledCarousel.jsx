import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";

export const StyledCarouselConteiner = styled.div`
  /* @media (max-width: 850px) {
    flex-direction: column;
  } */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  padding-top: 6rem;
  width: 100vw;
  height: auto;
`;
export const StyledCarouselDiv = styled.div`
  overflow-x: hidden;

  display: flex;
  justify-content: start;
  align-items: center;
  padding: 2rem 2rem;
  width: 90vw;
  height: auto;
`;
export const StyledPhotosConteiner = styled.div`
  position: relative;

  display: flex;
  justify-content: start;
  align-items: center;
  gap: 30px;
  margin-left: ${(props) => `${props.x}px`};
  transition: all 1s;
`;
export const StyledPointerLeft = styled(IoIosArrowBack)`
  color: white;
  height: 100px;
  width: 100px;
  display: flex; /* Garante que o ícone não seja distorcido */
  align-items: center; /* Centraliza o ícone verticalmente */
  justify-content: center;
`;

export const StyledPointerRigth = styled(IoIosArrowBack)`
  color: white;
  height: 100px;
  width: 100px;
  margin-left: 15px;

  rotate: 180deg;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTitle = styled.h2`
  position: absolute;
  padding-left: 2rem;
  color: #fdf7e7;
  align-self: flex-start;
  margin-top: 3rem;
  font-size: 2rem;
  top: 0;
`;

export const StyledImg = styled.img`
  width: 500%;
  height: auto;
  object-fit: contain;
`;
