import plant1 from "../../assets/Rectangle 21.png";
import plant2 from "../../assets/Rectangle 20.png";

const SectionThree = () => {
  return (
    <div className=" py-16 flex sm:flex-row flex-col items-center gap-16">
      <div className="relative">
        <div className="sm:w-[40rem] sm:h-[30rem] ">
          <img src={plant1} alt="photo" className="w-full h-full" />
        </div>
        <div className="absolute top-0 right-0 h-[30rem]">
          <img src={plant2} alt="photo" className="w-full h-full" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center space-y-4 max-w-[500px] mr-10 mt-5">
        <h2 className="text-[1.5rem] text-[#B59369]">
          Lorem ipsum & dolor sit amet
        </h2>
        <p className="text-sm">
          Phasellus elementum egestas lorem, at dictum urna sodales facilisis
          Maecenas ut tortor quis urna tincidunt molestie
        </p>
        <div className="flex items-center gap-5">
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-[#B59369]">Lorem ipsum</h3>
            <p className="text-sm">Lorem ipsum</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-[#B59369]">Lorem ipsum</h3>
            <p className="text-sm">Lorem ipsum</p>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default SectionThree;
