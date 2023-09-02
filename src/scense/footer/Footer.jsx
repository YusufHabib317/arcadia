import Logo from "../../ui/navabar/Logo";

import { BiLogoFacebook } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import Container from "../../ui/Container";

const Footer = ({ navRef }) => {
  return (
    <footer className="py-10" ref={navRef}>
      <Container>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
          <div className="mx-auto">
            <Logo footer />
          </div>
          <div className="flex items-center justify-between flex-col sm:flex-row gap-5 text-center">
            <div>
              <p>ANASAYFA</p>
              <p>HAKKIMIZDA</p>
              <p>BELGELER</p>
            </div>
            <div>
              <p>ESANS</p>
              <p>Aroma</p>
              <p>ILETISIM</p>
            </div>
            <div className="text-center flex flex-col items-center gap-2">
              <p className="text-xl">Follow Us</p>
              <div className="flex flex-row items-center gap-2 text-[#B59369] text-md">
                <BiLogoFacebook />
                <AiOutlineTwitter />
                <AiOutlineInstagram />
                <BsLinkedin />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
