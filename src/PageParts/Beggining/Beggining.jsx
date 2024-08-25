import {
  StyledBackImg,
  StyledBeggining,
  StyledButton,
  StyledTitle,
  StyledTitleDiv,
} from "./StyledBeggining";
import background from "../../assets/perfil_no_back.png";

export const Beggining = () => {
  return (
    <StyledBeggining>
      {/* <StyledBackImgDiv> */}
      <StyledBackImg src={background} />
      {/* </StyledBackImgDiv> */}
      <StyledTitleDiv>
        <StyledTitle>{"O caminho para o seu".toLocaleUpperCase()}</StyledTitle>
        <StyledTitle>{"bem-estar começa aqui".toLocaleUpperCase()}</StyledTitle>
        <StyledButton>AGENDE UMA CONSULTA</StyledButton>
      </StyledTitleDiv>
    </StyledBeggining>
  );
};
