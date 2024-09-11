import {
  StyledImg,
  StyledImgsDiv,
  StyledServices,
  StyledTitle,
} from "./StyledServices";
import { Carousel } from "../../Components/Carousel/Carousel";
import img1 from "../../assets/QUANDO DEVO PROCURAR UM MÉDICO CLÍNICO GERAL/1.png";
import img2 from "../../assets/QUANDO DEVO PROCURAR UM MÉDICO CLÍNICO GERAL/2.png";
import img3 from "../../assets/QUANDO DEVO PROCURAR UM MÉDICO CLÍNICO GERAL/3.png";
import img4 from "../../assets/QUANDO DEVO PROCURAR UM MÉDICO CLÍNICO GERAL/4.png";
import img5 from "../../assets/QUANDO DEVO PROCURAR UM MÉDICO CLÍNICO GERAL/5.png";

export const ServicesPage = () => {
  return (
    <StyledServices id="TRATAMENTOS">
      <StyledTitle>QUANDO DEVO PROCURAR UM MÉDICO CLÍNICO GERAL?</StyledTitle>
      <StyledImgsDiv>
        <StyledImg
          src={img2}
          alt="Para investigar
sintomas inespecíficos,
como febre, cansaço,
perda de apetite ou
dor persistente."
        />
        <StyledImg
          src={img3}
          alt="Para avaliar e tratar
alguns casos de anemia, Infecção urinária,
colesterol alto,
entre outras condições"
        />
        <StyledImg
          src={img4}
          alt="Para realizar exames
de rotina (check-up),
orientações de hábitos saudáveis e fazer uma avaliação preventiva"
        />
        <StyledImg
          src={img5}
          alt="Para avaliar  e encaminhar
para especialistas quando necessário e coordenar o cuidado entre diferentes profissionais"
        />
      </StyledImgsDiv>
    </StyledServices>
  );
};
