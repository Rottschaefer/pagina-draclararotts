import { Header } from "./Components/Header/Header";
import GlobalStyle from "./GlobalStyle";
import { Beggining } from "./PageParts/Beggining/Beggining";
import { GaleryPage } from "./PageParts/Galery/Galery";
import { ServicesPage } from "./PageParts/Services/Services";
import { TreatmentsPage } from "./PageParts/Treatments/Treatments";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Beggining />
      <ServicesPage />
      <TreatmentsPage />
      <GaleryPage />
    </>
  );
}

export default App;
