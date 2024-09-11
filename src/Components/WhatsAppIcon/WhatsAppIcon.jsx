import { Icon, StyledDiv } from "./StyledWhatsAppIcon";
import WhatsAppSVG from "../../assets/WhatsApp.png";

export const WhatsAppIcon = () => {
  const redirect = () => {
    window.location.href =
      "https://wa.me/5521974747636?text=Gostaria+de+mais+informações";
  };
  return (
    <StyledDiv onClick={redirect}>
      <Icon src={WhatsAppSVG} />
    </StyledDiv>
  );
};

// https://wa.me/5521974747636?text=Gostaria%de%mais%informações
