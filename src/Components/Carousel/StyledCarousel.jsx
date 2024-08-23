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
  width: 70vw;
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

export const StyledServiceDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledServiceDescription = styled.h2`
  font-weight: 100;
  font-size: 1.1rem;
  color: #fdf7e7;
`;
export const StyledPointerLeft = styled(IoIosArrowBack)`
  color: white;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-50%);
`;

export const StyledPointerRigth = styled(IoIosArrowBack)`
  transform: translateY(50%);

  color: white;
  height: 50px;
  width: 50px;
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
  font-size: 1.6rem;
  top: 0;
`;

export const StyledImg = styled.img`
  width: 250px;
  height: 300px;
  object-fit: cover;
`;
