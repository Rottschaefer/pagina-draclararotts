import { StyledServices } from "./StyledServices";
import { Carousel } from "../../Components/Carousel/Carousel";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";
import img6 from "../../assets/6.png";

export const ServicesPage = () => {
  const imgs = [
    [img1, "dor aguda/crônica"],
    [img2, "hipertensão"],
    [img3, "colesterol alto"],
    [img4, "sobrepeso/obesidade"],
    [img5, "atendimento domiciliar"],
    [img6, "exames de rotina"],
  ];
  return (
    <StyledServices>
      <Carousel imgs={imgs} imgWidth={250} Title={"TRATAMENTOS"} />
    </StyledServices>
  );
};
