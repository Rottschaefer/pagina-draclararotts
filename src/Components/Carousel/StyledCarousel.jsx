import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";

export const StyledCarouselConteiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 2rem;
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
`;

export const StyledPointerRigth = styled(IoIosArrowBack)`
  color: white;
  height: 2.5rem;
  width: 2.5rem;
  margin-left: 15px;

  rotate: 180deg;
`;
