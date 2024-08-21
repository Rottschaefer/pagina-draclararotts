import { StyledServices } from "./StyledTreatments";
import { Carousel } from "../../Components/Carousel/Carousel";

export const TreatmentsPage = () => {
  const imgs = [
    "https://picsum.photos/250/300",
    "https://picsum.photos/250/300",
    "https://picsum.photos/250/300",
    "https://picsum.photos/250/300",
    "https://picsum.photos/250/300",
  ];
  return (
    <StyledServices>
      <Carousel imgs={imgs} imgWidth={250} Title={"TRATAMENTOS"} />
    </StyledServices>
  );
};
