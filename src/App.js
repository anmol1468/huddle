import { Navbar } from "./components/export";
import FeatureSection from "./components/Features/FeatureSection";
import FooterSection from "./components/Footer/Footer";
import GlobalStyle from './components/globalStyles'
import Header from "./components/header/Header";


function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Header />
      <FeatureSection />
      <FooterSection />
    </>
  );
}

export default App;
