import { useState } from "react";
import {
  StyledCarouselConteiner,
  StyledCarouselDiv,
  StyledPhotosConteiner,
  StyledPointerLeft,
  StyledPointerRigth,
} from "./StyledCarousel";

export const Carousel = ({ imgs, imgWidth }) => {
  const [xPosition, setXPosition] = useState(0);

  const ImagesComponent = imgs.map((img, id) => <img src={img} key={id} />);

  const handleSlide = (dir) => {
    console.log("2efc");
    if (dir == 1 && xPosition == 0) {
      setXPosition(-1 * (imgWidth + 35) * (imgs.length - 1));
    } else if (dir == -1 && xPosition <= -1 * imgWidth * (imgs.length - 1)) {
      setXPosition(0);
    } else {
      //   setXPosition(dir * (xPosition + imgWidth));
      setXPosition(xPosition + dir * (imgWidth + 35));
    }
  };
  return (
    <StyledCarouselConteiner>
      <StyledCarouselDiv>
        <StyledPointerLeft onClick={() => handleSlide(1)}>
          CLick
        </StyledPointerLeft>
        <StyledPhotosConteiner x={xPosition}>
          {ImagesComponent}
        </StyledPhotosConteiner>
        <StyledPointerRigth onClick={() => handleSlide(-1)}>
          CLick
        </StyledPointerRigth>
      </StyledCarouselDiv>
    </StyledCarouselConteiner>
  );
};
