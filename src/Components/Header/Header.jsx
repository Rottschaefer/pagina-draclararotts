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

  const handleScrollToSections = (id) => {
    const section = document.getElementById(`${id}`);

    const header = document.getElementById("HEADER");

    window.scrollTo(0, section.offsetTop - header.clientHeight);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 75) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navOptions = ["TRATAMENTOS", "SOBRE", "INSTAGRAM", "CONTATO"];

  const NavOptionsComponent = navOptions.map((option, id) => (
    <StyledNavOption key={id} onClick={() => handleScrollToSections(option)}>
      {option}
    </StyledNavOption>
  ));
  return (
    <StyledHeader id="HEADER" isScrolled={isScrolled}>
      <StyledLogo src={logo} isScrolled={isScrolled} />
      <StyledOptionsDiv isScrolled={isScrolled}>
        {NavOptionsComponent}
      </StyledOptionsDiv>
    </StyledHeader>
  );
};
