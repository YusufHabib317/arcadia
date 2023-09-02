import { useState } from "react";
import Container from "../Container";
import Logo from "./Logo";
import Routing from "./Routing";
import Search from "./Search";

import { HiBars3 } from "react-icons/hi2";

const Navbar = ({ navRef }) => {
  const [toggleMenu, settoggleMenu] = useState(false);
  console.log(toggleMenu);

  return (
    <nav className="py-6 lg:py-8 ">
      <Container>
        <div className="flex justify-between items-center">
          <Logo />
          <Routing />
          <Search />
          <div
            className=" block sm:hidden text-[1.5rem] cursor-pointer"
            onClick={() => settoggleMenu(true)}
          >
            <HiBars3 />
          </div>

          {toggleMenu && (
            <div className="sm:hidden absolute w-[15rem] h-screen top-0 right-0 bg-yellow-300 text-yellow-700 z-50">
              <Routing toggle settoggleMenu={settoggleMenu} />
            </div>
          )}
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
