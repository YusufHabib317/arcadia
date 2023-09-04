import Group from "../assets/Group 23.svg";
const Scroll = ({ navRef, label, vertical = false }) => {
  if (vertical) {
    return (
      <div className="relative rotate-180 cursor-pointer mt-3 h-[5rem]">
        <p
          className={`vertical_ mt-[-0.75rem] absolute top-[-86%] right-[-125%] text-[0.85rem] font-normal`}
          onClick={() => navRef.current.scrollIntoView({ behavior: "smooth" })}
        >
          {label}
        </p>

        <img src={Group} className="object-cover" />
      </div>
    );
  }
  return (
    <div className="relative cursor-pointer mt-3 h-[5rem]">
      <p
        className={`vertical mt-[-0.75rem] absolute top-[-26px] right-[-2px] text-[0.85rem] font-normal`}
        onClick={() => navRef.current.scrollIntoView({ behavior: "smooth" })}
      >
        {label}
      </p>

      <img src={Group} className="object-cover" />
    </div>
  );
};

export default Scroll;
