import { StyledServices } from "./StyledServices";
import { Carousel } from "../../Components/Carousel/Carousel";

export const ServicesPage = () => {
  const imgs = [
    ["src/assets/1.jpg", "dor aguda/crônica"],
    ["src/assets/2.jpg", "hipertensão"],
    ["src/assets/3.jpg", "colesterol alto"],
    ["src/assets/4.jpg", "sobrepeso/obesidade"],
    ["src/assets/5.jpg", "atendimento domiciliar"],
    ["src/assets/6.jpg", "exames de rotina"],
  ];
  return (
    <StyledServices>
      <Carousel imgs={imgs} imgWidth={250} Title={"ATENDIMENTOS"} />
    </StyledServices>
  );
};
