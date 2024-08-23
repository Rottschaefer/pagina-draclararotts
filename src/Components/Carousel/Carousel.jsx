import { useState } from "react";
import {
  StyledCarouselConteiner,
  StyledCarouselDiv,
  StyledDiv,
  StyledImg,
  StyledPhotosConteiner,
  StyledPointerLeft,
  StyledPointerRigth,
  StyledServiceDescription,
  StyledServiceDiv,
  StyledTitle,
} from "./StyledCarousel";

export const Carousel = ({ imgs, imgWidth, Title }) => {
  const [xPosition, setXPosition] = useState(0);

  const ImagesComponent = imgs.map((img, id) => (
    <StyledServiceDiv key={id}>
      <StyledImg src={img[0]} />
      <StyledServiceDescription>
        {img[1].toUpperCase()}
      </StyledServiceDescription>
    </StyledServiceDiv>
  ));

  const handleSlide = (dir) => {
    console.log("2efc");
    if (dir == 1 && xPosition == 0) {
      setXPosition(-1 * (imgWidth + 35) * (imgs.length - 1));
    } else if (dir == -1 && xPosition <= -1 * imgWidth * (imgs.length - 1)) {
      setXPosition(0);
    } else {
      setXPosition(xPosition + dir * (imgWidth + 35));
    }
  };
  return (
    <StyledCarouselConteiner>
      <StyledPointerLeft onClick={() => handleSlide(1)} />
      <StyledDiv>
        <StyledTitle>{Title}</StyledTitle>

        <StyledCarouselDiv>
          <StyledPhotosConteiner x={xPosition}>
            {ImagesComponent}
          </StyledPhotosConteiner>
        </StyledCarouselDiv>
      </StyledDiv>
      <StyledPointerRigth onClick={() => handleSlide(-1)} />
    </StyledCarouselConteiner>
  );
};
