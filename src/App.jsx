import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Awards from "./components/Awards/Awards";
import Footer from "./components/Footer/Footer";
import PracticeAreas from "./components/PracticeArea/PracticeAreas";
import CustomDivider from "./components/CustomDivider/CustomDivider";
import Team from "./components/Team/Team";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Awards/>
      <PracticeAreas/>
      <Team />
      <CustomDivider/>
      <Footer/>
    </div>
  );
}

export default App;
