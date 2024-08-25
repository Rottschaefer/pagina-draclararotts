import { Header } from "./Components/Header/Header";
import GlobalStyle from "./GlobalStyle";
import { AboutPage } from "./PageParts/About/About";
import { Beggining } from "./PageParts/Beggining/Beggining";
import { GaleryPage } from "./PageParts/Galery/Galery";
import { LocationPage } from "./PageParts/Location/Location";
import { ServicesPage } from "./PageParts/Services/Services";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Beggining />
      <ServicesPage />
      <GaleryPage />
      <AboutPage />
      <LocationPage />
    </>
  );
}

export default App;
