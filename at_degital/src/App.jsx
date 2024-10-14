import "./App.css";
import ComputerScre from "./Component/ComputerScre";
import Footer from "./Component/Footer";
import Imagecontent from "./Component/Imagecontent";
import Navbar from "./Component/Navbar";
import ScreenLogo from "./Component/ScreenLogo";
import Filequise from "./Component/Filequise";

function App() {
  return (
    <>
      <Navbar />

      <Imagecontent />
      <ComputerScre />
      <ScreenLogo />
      <Filequise />

      <Footer />
    </>
  );
}

export default App;
