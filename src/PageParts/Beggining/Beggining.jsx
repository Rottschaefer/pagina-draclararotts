import {
  StyledBackImg,
  StyledBeggining,
  StyledButton,
  StyledTitle,
  StyledTitleDiv,
} from "./StyledBeggining";
import background from "../../assets/perfil_no_back.png";
import { WhatsAppIcon } from "../../Components/WhatsAppIcon/WhatsAppIcon";

export const Beggining = () => {
  return (
    <StyledBeggining id="BEGGINING">
      <WhatsAppIcon />

      <StyledBackImg src={background} />
      <StyledTitleDiv>
        <StyledTitle>{"O caminho para o seu".toLocaleUpperCase()}</StyledTitle>
        <StyledTitle>{"bem-estar começa aqui".toLocaleUpperCase()}</StyledTitle>
        <StyledButton>AGENDE UMA CONSULTA</StyledButton>
      </StyledTitleDiv>
    </StyledBeggining>
  );
};
