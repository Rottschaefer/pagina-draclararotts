import { useState } from "react";
import { StyledServices, StyledTitle } from "./StyledServices";
import { Carousel } from "../../Components/Carousel/Carousel";

export const ServicesPage = () => {
  const imgs = [
    "https://picsum.photos/350/300",
    "https://picsum.photos/350/300",
    "https://picsum.photos/350/300",
    "https://picsum.photos/350/300",
    "https://picsum.photos/350/300",
  ];
  return (
    <StyledServices>
      <StyledTitle>ATENDIMENTOS</StyledTitle>
      <Carousel imgs={imgs} imgWidth={350} />
    </StyledServices>
  );
};
