import { StyledServices } from "./StyledServices";
import { Carousel } from "../../Components/Carousel/Carousel";

export const ServicesPage = () => {
  const imgs = [
    "https://picsum.photos/250/300",
    "https://picsum.photos/250/300",
    "https://picsum.photos/250/300",
    "https://picsum.photos/250/300",
    "https://picsum.photos/250/300",
  ];
  return (
    <StyledServices>
      <Carousel imgs={imgs} imgWidth={250} Title={"ATENDIMENTOS"} />
    </StyledServices>
  );
};
