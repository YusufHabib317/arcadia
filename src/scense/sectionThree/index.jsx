import plant1 from "../../assets/Rectangle 21.png";
import plant2 from "../../assets/Rectangle 20.png";
import plant from "../../assets/Rectangle 19.png";
import Scroll from "../../ui/Scroll";

const SectionThree = ({ navRef }) => {
  return (
    <div className="relative mb-10 pb-[5rem] pt-[15rem] flex justify-end items-center">
      <div className="absolute w-[404px] h-[402px] top-[-7rem] right-0 ">
        <img src={plant} alt="photo" />
        <div className="absolute bottom-[20%] left-[-5%]">
          <Scroll navRef={navRef} label="Lorem Ipsum" vertical />
        </div>
      </div>
      <div className="absolute left-0 w-[541px] h-[567px] z-50 border ">
        <img src={plant1} alt="" className="object-cover w-full h-full" />
      </div>
      <div className="absolute bottom-2 left-[10rem] w-[368px] h-[504px] z-50 ">
        <img src={plant2} alt="" className="object-cover w-full h-full" />
      </div>
      <div className="flex flex-col justify-center items-center space-y-4 max-w-[420px] mr-[11rem] mt-[10rem]">
        <h2 className="text-[3rem] text-[#C49F72]">
          Lorem ipsum & dolor sit amet
        </h2>
        <p className="text-sm">
          Phasellus elementum egestas lorem, at dictum urna sodales facilisis
          Maecenas ut tortor quis urna tincidunt molestie
        </p>
        <div className="flex items-center w-full gap-10">
          <div className="flex flex-col justify-center text-left">
            <h3 className="text-[#C49F72]">Lorem ipsum</h3>
            <p className="text-sm text-left">Lorem ipsum</p>
          </div>
          <div className="w-[1px] h-[3rem] bg-pink-200" />
          <div className="flex flex-col justify-center text-left">
            <h3 className="text-[#C49F72]">Lorem ipsum</h3>
            <p className="text-sm ">Lorem ipsum</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
