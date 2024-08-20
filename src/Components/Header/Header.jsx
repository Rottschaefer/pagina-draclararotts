import { useEffect, useState } from "react";
import {
  StyledHeader,
  StyledNavOption,
  StyledOptionsDiv,
} from "./StyledHeader";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navOptions = ["ATENDIMENTO", "SOBRE", "GALERIA", "CONTATO"];

  const NavOptionsComponent = navOptions.map((option, id) => (
    <StyledNavOption key={id}>{option}</StyledNavOption>
  ));
  return (
    <StyledHeader isScrolled={isScrolled}>
      <p>Dra Clara Rotts</p>
      <StyledOptionsDiv>{NavOptionsComponent}</StyledOptionsDiv>
    </StyledHeader>
  );
};
