import { StyledServices, StyledTitle } from "./StyledGalery";
import { Carousel } from "../../Components/Carousel/Carousel";

export const GaleryPage = () => {
  const imgs = [
    "https://picsum.photos/350/500",
    "https://picsum.photos/350/500",
    "https://picsum.photos/350/500",
    "https://picsum.photos/350/500",
    "https://picsum.photos/350/500",
  ];
  return (
    <StyledServices>
      <StyledTitle>GALERIA</StyledTitle>
      <Carousel imgs={imgs} imgWidth={350} />
    </StyledServices>
  );
};
