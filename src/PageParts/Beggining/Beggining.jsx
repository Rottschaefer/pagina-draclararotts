import {
  StyledBackImg,
  StyledBackWidgetDiv,
  StyledBeggining,
  StyledButton,
  StyledTitle,
  StyledTitleDiv,
  StyledWidgetDiv,
} from "./StyledBeggining";
import background from "../../assets/perfil_no_back.png";
import { WhatsAppIcon } from "../../Components/WhatsAppIcon/WhatsAppIcon";
import { DoctoraliaWidget } from "../../Components/DoctoraliaWidget/DoctoraliaWidget";
import { useState } from "react";

export const Beggining = () => {
  const [showWidget, setShowWidget] = useState(false);

  const handleClick = () => {
    setShowWidget(!showWidget);
  };
  return (
    <StyledBeggining id="BEGGINING">
      <WhatsAppIcon />
      {showWidget && (
        <>
          <StyledBackWidgetDiv onClick={handleClick} />
          <StyledWidgetDiv onClick={(e) => e.stopPropagation()}>
            <DoctoraliaWidget showWidget={showWidget} />
          </StyledWidgetDiv>
        </>
      )}

      <StyledBackImg src={background} />
      <StyledTitleDiv>
        <StyledTitle>{"O caminho para o seu".toLocaleUpperCase()}</StyledTitle>
        <StyledTitle>{"bem-estar começa aqui".toLocaleUpperCase()}</StyledTitle>
        <StyledButton onClick={handleClick}>AGENDE UMA CONSULTA</StyledButton>
      </StyledTitleDiv>
    </StyledBeggining>
  );
};
