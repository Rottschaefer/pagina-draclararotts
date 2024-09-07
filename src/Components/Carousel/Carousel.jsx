import React, { useState } from "react";
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
  const [startPos, setStartPos] = useState(0);
  const [dragging, setDragging] = useState(false);

  const gap = 40; // gap entre as imagens
  const totalImgs = imgs.length;
  const carouselWidth = imgWidth * totalImgs + gap * (totalImgs - 1);
  const visibleWidth = (70 * window.innerWidth) / 100; // 70vw como na estilização do carrossel

  const maxOffset = Math.min(0, visibleWidth - carouselWidth);

  const ImagesComponent = imgs.map((img, id) => (
    <StyledServiceDiv key={id}>
      <StyledImg src={img[0]} alt={img[1]} />
      <StyledServiceDescription>
        {img[1].toUpperCase()}
      </StyledServiceDescription>
    </StyledServiceDiv>
  ));

  const handleDragStart = (e) => {
    setStartPos(e.clientX || e.touches[0].clientX);
    setDragging(true);
  };

  const handleDragMove = (e) => {
    if (dragging) {
      const currentPos = e.clientX || e.touches[0].clientX;
      const move = (currentPos - startPos) * 4;
      setXPosition((prevPosition) => {
        let newPosition = prevPosition + move;
        if (newPosition > 0) {
          newPosition = 0;
        } else if (newPosition < maxOffset) {
          newPosition = maxOffset;
        }
        return newPosition;
      });
      setStartPos(currentPos);
      setTimeout(() => {
        setDragging(false);
      }, 1000);
    }
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  const handleSlide = (dir) => {
    setXPosition((prevPosition) => {
      let newPosition = prevPosition + dir * (imgWidth + gap);
      if (newPosition > 0) {
        newPosition = 0;
      } else if (newPosition < maxOffset) {
        newPosition = maxOffset;
      }
      return newPosition;
    });
  };

  return (
    <StyledCarouselConteiner>
      <StyledPointerLeft onClick={() => handleSlide(1)} />
      <StyledDiv>
        <StyledTitle>{Title}</StyledTitle>
        <StyledCarouselDiv
          onMouseDown={handleDragStart}
          onTouchStart={handleDragStart}
          onMouseMove={handleDragMove}
          onTouchMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchEnd={handleDragEnd}
        >
          <StyledPhotosConteiner x={xPosition}>
            {ImagesComponent}
          </StyledPhotosConteiner>
        </StyledCarouselDiv>
      </StyledDiv>
      <StyledPointerRigth onClick={() => handleSlide(-1)} />
    </StyledCarouselConteiner>
  );
};
