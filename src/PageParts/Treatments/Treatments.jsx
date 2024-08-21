import { StyledServices } from "./StyledTreatments";
import { Carousel } from "../../Components/Carousel/Carousel";

export const TreatmentsPage = () => {
  const imgs = [
    "https://picsum.photos/350/300",
    "https://picsum.photos/350/300",
    "https://picsum.photos/350/300",
    "https://picsum.photos/350/300",
    "https://picsum.photos/350/300",
  ];
  return (
    <StyledServices>
      <Carousel imgs={imgs} imgWidth={350} Title={"TRATAMENTOS"} />
    </StyledServices>
  );
};
