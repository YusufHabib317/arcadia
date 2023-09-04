import Logo from "../../ui/navabar/Logo";

import { BiLogoFacebook } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";

const Footer = ({ navRef }) => {
  return (
    <footer className="py-10" ref={navRef}>
      <div className="max-w-[2520px] mx-auto px-4 sm:px-2 xl:px-20 md:px-40">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between ">
          <div className="">
            <Logo footer />
          </div>
          <div className="flex items-center justify-between sm:flex-row gap-16 text-center mt-10 sm:mt-0">
            <div className="child:cursor-pointer">
              <p>ANASAYFA</p>
              <p>HAKKIMIZDA</p>
              <p>BELGELER</p>
            </div>
            <div className="child:cursor-pointer">
              <p>ESANS</p>
              <p>Aroma</p>
              <p>ILETISIM</p>
            </div>
            <div className="text-center flex flex-col items-center gap-2">
              <p className="text-xl">Follow Us</p>
              <div className="flex flex-row items-center gap-2 text-[#B59369] text-md child:cursor-pointer">
                <BiLogoFacebook />
                <AiOutlineTwitter />
                <AiOutlineInstagram />
                <BsLinkedin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
