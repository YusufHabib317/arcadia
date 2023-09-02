import { useRef } from "react";
import Footer from "./scense/footer/Footer";
import Landing from "./scense/landing/Landing";
import SectionFour from "./scense/sectionFour";
import SectionThree from "./scense/sectionThree";
import SectionTwo from "./scense/sectionTwo";

function App() {
  const navRef = useRef();
  return (
    <>
      <Landing />
      <SectionTwo navRef={navRef} />
      <SectionThree />
      <SectionFour navRef={navRef} />
      <Footer navRef={navRef} />
    </>
  );
}

export default App;
