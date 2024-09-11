import { useEffect, useState } from "react";

export const DoctoraliaWidget = ({ showWidget }) => {
  useEffect(() => {
    const scriptId = "zl-widget-s";

    // Função para remover o script quando o componente desmontar
    const removeScript = () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };

    // Função para adicionar o script
    const addScript = async () => {
      if (!document.getElementById(scriptId)) {
        console.log("Carregando...");
        const script = document.createElement("script");
        console.log(script);
        script.id = scriptId;
        script.src = "//platform.docplanner.com/js/widget.js";
        script.async = true;

        document.body.appendChild(script);
      }
    };

    addScript();
    return () => {
      removeScript();
    };
  }, [showWidget]);

  return (
    <div>
      <a
        id="zl-url"
        className="zl-url"
        href="https://www.doctoralia.com.br/clara-rottschaefer-berto/medico-clinico-geral/niteroi"
        rel="nofollow"
        data-zlw-doctor="clara-rottschaefer-berto"
        data-zlw-type="big_with_calendar"
        data-zlw-opinion="false"
        data-zlw-hide-branding="true"
        data-zlw-saas-only="false"
      >
        Clara Rottschaefer Berto - Doctoralia.com.br
      </a>
    </div>
  );
};
