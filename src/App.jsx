import GlobalStyle from "./GlobalStyle";
import { Beggining } from "./PageParts/Beggining/Beggining";
import { ServicesPage } from "./PageParts/Services/Services";

function App() {
  return (
    <>
      <GlobalStyle />
      <Beggining />
      <ServicesPage />
    </>
  );
}

export default App;
