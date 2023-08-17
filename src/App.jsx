import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Awards from "./components/Awards/Awards";
import Footer from "./components/Footer/Footer";
import PracticeAreas from "./components/PracticeArea/PracticeAreas";
import CustomDivider from "./components/CustomDivider/CustomDivider";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Awards/>
      <PracticeAreas/>
      <CustomDivider/>
      <Footer/>
    </div>
  );
}

export default App;
