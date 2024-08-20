import {
  StyledBeggining,
  StyledButton,
  StyledTitle,
  StyledTitleDiv,
} from "./StyledBeggining";

export const Beggining = () => {
  return (
    <StyledBeggining>
      <StyledTitleDiv>
        <StyledTitle>
          {"O caminho para o seu bem-estar começa aqui".toLocaleUpperCase()}
        </StyledTitle>
        <StyledButton>AGENDE UMA CONSULTA</StyledButton>
      </StyledTitleDiv>
    </StyledBeggining>
  );
};
