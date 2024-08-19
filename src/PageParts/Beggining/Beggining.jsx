import {
  StyledBeggining,
  StyledButton,
  StyledHeader,
  StyledNavOption,
  StyledOptionsDiv,
  StyledTitle,
  StyledTitleDiv,
} from "./StyledBeggining";

export const Beggining = () => {
  const navOptions = ["ATENDIMENTO", "SOBRE", "GALERIA", "CONTATO"];

  const NavOptionsComponent = navOptions.map((option, id) => (
    <StyledNavOption key={id}>{option}</StyledNavOption>
  ));
  return (
    <StyledBeggining>
      <StyledHeader>
        <p>Dra Clara Rotts</p>
        <StyledOptionsDiv>{NavOptionsComponent}</StyledOptionsDiv>
      </StyledHeader>
      <StyledTitleDiv>
        <StyledTitle>
          {"O caminho para o seu bem-estar começa aqui".toLocaleUpperCase()}
        </StyledTitle>
        <StyledButton>AGENDE UMA CONSULTA</StyledButton>
      </StyledTitleDiv>
    </StyledBeggining>
  );
};
