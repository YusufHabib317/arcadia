import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const Routing = ({ toggle = false, settoggleMenu }) => {
  const [selectedPage, setSelectedPage] = useState("");

  const routes = [
    {
      href: "/anasayfa",
      label: `ANASAYFA`,
    },
    {
      href: "/hakkimizda",
      label: `HAKKIMIZDA`,
    },
    {
      href: "/belgeler",
      label: `BELGELER`,
    },
    {
      href: "/esans",
      label: `ESANS`,
    },
    {
      href: "/aroma",
      label: `Aroma`,
    },
  ];

  const onSelect = (label) => {
    setSelectedPage(label ? label : "");
  };

  return (
    <div className="">
      {toggle ? (
        <div className="relative p-16">
          <AiOutlineClose
            className="absolute top-5 right-5 cursor-pointer z-100"
            onClick={() => settoggleMenu(false)}
          />
          <div className="flex flex-col gap-10 items-center sm:text-md font-bold">
            {routes.map(({ label, href }) => {
              return (
                <div className="" key={label} onClick={() => onSelect(label)}>
                  <Link
                    to={href}
                    className={`${
                      selectedPage === label && "text-neutral-500"
                    } hover:text-neutral-500 cursor-pointer`}
                  >
                    {label}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="hidden sm:flex items-center gap-8 sm:text-md font-bold">
          {routes.map(({ label, href }) => {
            return (
              <Link
                key={label}
                to={href}
                className={`${
                  selectedPage === label && "text-neutral-500"
                } hover:text-neutral-500 cursor-pointer`}
                onClick={() => onSelect(label)}
              >
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Routing;
