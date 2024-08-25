import {
  StyledAbout,
  StyledDescription,
  StyledDescriptionDiv,
  StyledPhoto,
  StyledTitle,
} from "./StyledAbout";
import photo from "../../assets/about-photo.png";

export const AboutPage = () => {
  return (
    <StyledAbout>
      {" "}
      <StyledPhoto src={photo} />
      <StyledDescriptionDiv>
        <StyledTitle>{"conheça a dra clara".toLocaleUpperCase()}</StyledTitle>
        <StyledDescription>
          Uma verdadeira carioca de coração, nasceu em Mato Grosso e cresceu no
          Rio de Janeiro. Hoje, Clara divide a vida com seu esposo e cuida com
          carinho de seus quatro gatos. Ela concluiu o curso de Medicina na
          Universidade Federal do Estado do Rio de Janeiro (UNIRIO) em julho de
          2021. Desde então, Clara dedicou-se à prática médica em Emergências
          Clínicas de adultos, Clínica da Família e unidades de internação.
          <br />
          No momento, Clara oferece seus conhecimentos como clínica geral em
          Icaraí e Ipanema ou na casa de seus pacientes. Melhorar a qualidade de
          vida de seus pacientes e oferecer um cuidado que vai além das
          expectativas são suas prioridades.
        </StyledDescription>
      </StyledDescriptionDiv>
    </StyledAbout>
  );
};
