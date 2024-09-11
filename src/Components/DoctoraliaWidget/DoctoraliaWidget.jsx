import { useEffect, useState } from "react";

export const DoctoraliaWidget = ({ showWidget }) => {
  const [loading, setLoading] = useState(true); // Estado de carregamento
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
        script.id = scriptId;
        script.src = "//platform.docplanner.com/js/widget.js";
        script.async = true;

        // Quando o script estiver carregado, atualiza o estado para remover o loading
        script.onload = () => {
          console.log("Carregado!");
          setLoading(false); // O script terminou de carregar
        };

        // Caso ocorra algum erro durante o carregamento
        script.onerror = () => {
          console.log("Erro ao carregar o script.");
          setLoading(false);
        };

        document.body.appendChild(script);
      } else {
        setLoading(false); // O script já está carregado
      }
    };

    // Adiciona o script ao montar
    addScript();

    // Remove o script ao desmontar
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
