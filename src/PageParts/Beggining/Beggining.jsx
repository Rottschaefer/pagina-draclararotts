import {
  StyledBackImg,
  StyledBackWidgetDiv,
  StyledBeggining,
  StyledButton,
  StyledGoBack,
  StyledTitle,
  StyledTitleDiv,
  StyledWidgetDiv,
} from "./StyledBeggining";
import background from "../../assets/perfil_no_back.png";
import { WhatsAppIcon } from "../../Components/WhatsAppIcon/WhatsAppIcon";
import { DoctoraliaWidget } from "../../Components/DoctoraliaWidget/DoctoraliaWidget";
import { useEffect, useState } from "react";

export const Beggining = () => {
  const [showWidget, setShowWidget] = useState(false);

  useEffect(() => console.log(window.innerHeight), []);

  const handleClick = () => {
    if (window.innerHeight > 750) {
      setShowWidget(!showWidget);
    } else {
      window.location.href =
        "https://www.doctoralia.com.br/clara-rottschaefer-berto/medico-clinico-geral/niteroi?utm_id=868634&utm_source=widget-doctor-868634&utm_medium=big&utm_campaign=&utm_content=#highlight-calendar";
    }
  };
  return (
    <StyledBeggining id="BEGGINING">
      <WhatsAppIcon />
      {showWidget && (
        <>
          <StyledBackWidgetDiv onClick={handleClick} />
          <StyledWidgetDiv onClick={(e) => e.stopPropagation()}>
            <StyledGoBack onClick={handleClick}>VOLTAR</StyledGoBack>

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
