import { useEffect, useState } from "react";
import axios from "axios";
import {
  StyledDiv,
  StyledImg,
  StyledImgsDiv,
  StyledServices,
  StyledTitle,
} from "./StyledGalery";

export const GaleryPage = () => {
  const [instaImgs, setInstaImgs] = useState([]);

  useEffect(() => {
    const fetchInstaImages = async () => {
      try {
        const response = await axios.get(
          `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,timestamp&access_token=${
            import.meta.env.VITE_META_ACESS_TOKEN
          }`
        );

        const images = response.data.data.sort(
          (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
        );

        const newImages = [];

        const imgsQuant = window.innerWidth > 675 ? 6 : 3;

        console.log();
        for (let i = 0; i < imgsQuant; i++) {
          newImages.push({
            url: images[i].media_url,
            link: images[i].permalink,
          });
        }

        setInstaImgs(newImages);
      } catch (error) {
        console.error("Erro ao buscar imagens do Instagram:", error);
      }
    };

    fetchInstaImages();
  }, []);

  return (
    <StyledServices id="INSTAGRAM">
      <StyledDiv>
        <StyledTitle>INSTAGRAM</StyledTitle>

        <StyledImgsDiv>
          {instaImgs.map((img, id) => (
            <a href={img.link} target="_blank" key={id}>
              <StyledImg src={img.url} alt={`Instagram post ${id}`} />
            </a>
          ))}
        </StyledImgsDiv>
      </StyledDiv>
    </StyledServices>
  );
};
