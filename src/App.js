import Footer from "./Pages/Footer/Footer";
import Navbar from "./Pages/Navbar/Navbar";
import Section1 from "./Pages/Section/Section1";
import Section2 from "./Pages/Section/Section2";
import Section3 from "./Pages/Section/Section3";
import Section4 from "./Pages/Section/Section4";
import Section5 from "./Pages/Section/Section5";
import Section6 from "./Pages/Section/Section6";

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Section1></Section1>

      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <div className="p-2">
        <Section5></Section5>
      </div>
      <Section6></Section6>
      <Footer></Footer>
    </div>
  );
}

export default App;
