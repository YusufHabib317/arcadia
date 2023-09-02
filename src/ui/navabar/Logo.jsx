import LogoImg from "../../assets/Asset 1 1.png";

const Logo = ({ footer = false }) => {
  return (
    <div className={`${footer && "w-[10rem]"}`}>
      <img alt="logo" src={LogoImg} className="w-full h-full" />
    </div>
  );
};

export default Logo;
