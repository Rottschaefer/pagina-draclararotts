import {
  StyledBeggining,
  StyledHeader,
  StyledNavOption,
  StyledOptionsDiv,
} from "./StyledBeggining";

export const Beggining = () => {
  const navOptions = ["ATENDIMENTO", "SOBRE", "GALERIA", "CONTATO"];

  const NavOptionsComponent = navOptions.map((option, id) => (
    <StyledNavOption key={id}>{option}</StyledNavOption>
  ));
  return (
    <StyledBeggining>
      <StyledHeader>
        <p>Clara rott</p>
        <StyledOptionsDiv>{NavOptionsComponent}</StyledOptionsDiv>
      </StyledHeader>
    </StyledBeggining>
  );
};
