import { useEffect, useState } from "react";
import {
  StyledHeader,
  StyledLogo,
  StyledNavOption,
  StyledOptionsDiv,
} from "./StyledHeader";

import logo from "../../assets/logo-1.png";

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
      <StyledLogo src={logo} isScrolled={isScrolled} />
      <StyledOptionsDiv isScrolled={isScrolled}>
        {NavOptionsComponent}
      </StyledOptionsDiv>
    </StyledHeader>
  );
};
