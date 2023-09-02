import Navbar from "../../ui/navabar";
import LandingText from "./LandingHeading";

const Landing = ({ navRef }) => {
  return (
    <div className="relative w-full min-h-screen bg-hero bg-no-repeat bg-cover">
      <Navbar />
      <div className="landingHeading absolute text-center text-white w-full">
        <LandingText />
      </div>
    </div>
  );
};

export default Landing;
