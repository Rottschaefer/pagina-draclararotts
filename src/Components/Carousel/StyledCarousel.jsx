import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";

export const StyledCarouselConteiner = styled.div`
  overflow-x: hidden;

  display: flex;
  justify-content: start;
  align-items: center;
  padding: 2rem 2rem;
  width: 90vw;
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
  /* width: 90%; */
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 30px;
  margin-left: ${(props) => `${props.x}px`};
  transition: all 1s;
`;
export const StyledPointerLeft = styled(IoIosArrowBack)`
  color: white;
  height: 2.5rem;
  width: 2.5rem;
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
`;

export const StyledPointerRigth = styled(IoIosArrowBack)`
  color: white;
  height: 2.5rem;
  width: 2.5rem;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(50%);
  rotate: 180deg;
`;
