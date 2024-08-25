import {
  StyledContactDiv,
  StyledContactInfo,
  StyledContactTitle,
  StyledInfoDiv,
  StyledMap,
  StyledPin,
  StyledServices,
} from "./StyledLocation";

export const LocationPage = () => {
  return (
    <StyledServices>
      <StyledInfoDiv>
        <StyledContactDiv>
          <StyledContactTitle>CONTATO</StyledContactTitle>
          <StyledContactInfo>{"(21) 974747636"}</StyledContactInfo>
          <StyledContactInfo>clara.rottschaefer@gmail.com</StyledContactInfo>
        </StyledContactDiv>
        <StyledContactDiv>
          <StyledContactTitle>HORÁRIO DE ATENDIMENTO</StyledContactTitle>
          <StyledContactInfo>
            {"de segunda a sexta de 09:00 às 17:00.".toLocaleUpperCase()}
          </StyledContactInfo>
        </StyledContactDiv>
      </StyledInfoDiv>

      <StyledInfoDiv>
        <StyledContactDiv>
          <StyledPin />

          <StyledContactInfo>
            {" "}
            {"rua gavião peixoto, 124, sala 1508 icaraí, niterói".toLocaleUpperCase()}
          </StyledContactInfo>
          <StyledMap
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.263315103878!2d-43.1109646!3d-22.9036567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9983e43d9bc953%3A0xf559d81bfc134511!2sR.%20Gavi%C3%A3o%20Peixoto%2C%20124%20-%20Icara%C3%AD%2C%20Niter%C3%B3i%20-%20RJ%2C%2024230-101!5e0!3m2!1spt-BR!2sbr!4v1724622495508!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></StyledMap>
        </StyledContactDiv>
        <StyledContactDiv>
          <StyledPin />

          <StyledContactInfo>
            {" "}
            {"rua aníbal de mendonça, 132, 2º andar ipanema, rio de janeiro".toLocaleUpperCase()}
          </StyledContactInfo>
          <StyledMap
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14692.438604818824!2d-43.2110776!3d-22.982995!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd5671eaec8d3%3A0xf44831131b7376dd!2sLe%20Sense%20Clinique%20Ipanema!5e0!3m2!1spt-BR!2sbr!4v1724623082332!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></StyledMap>
        </StyledContactDiv>
      </StyledInfoDiv>
    </StyledServices>
  );
};
