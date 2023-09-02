import { PiPlantFill } from "react-icons/pi";

const Scroll = ({ navRef, label, vertical = false }) => {
  return (
    <>
      <div className="relative h-[100px] cursor-pointer">
        <PiPlantFill
          className={`absolute bottom-[-13px] right-[1px] rotate-180
          ${vertical && "top-[-30px] right-[4px]"}
          `}
        />
        <div className="bg-black w-[1px] h-full" />
        <p
          className={`vertical absolute top-[-30px] right-[4px] text-[1rem] font-normal
          ${vertical && "bottom-[-13px] right-[1px]"}
          
          `}
          onClick={() => navRef.current.scrollIntoView({ behavior: "smooth" })}
        >
          {label}
        </p>
      </div>
    </>
  );
};

export default Scroll;
