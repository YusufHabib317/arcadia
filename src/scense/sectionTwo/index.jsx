import Scroll from "../../ui/Scroll";

const SectionTwo = ({ navRef }) => {
  return (
    <div className="pt-16 relative">
      <div className="absolute top-5 right-0 w-[16em] text-[0.7rem] text-[#B59369]">
        <p>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit. Phasellus
        </p>
      </div>
      <div className="absolute top-9 left-[50%] translate-x-[50%]">
        <Scroll navRef={navRef} label="Scroll" />
      </div>

      <p className="vertical absolute top-[50%] left-5 translate-y-[50%] text-sm">
        Lorem ipsum dolor sit amet
      </p>

      <div className="mx-auto px-4 sm:px-2 xl:px-20 md:px-[15rem] md:py-[2rem]">
        <div
          className="bg-section bg-cover bg-no-repeat w-full h-full flex flex-col justify-center items-center
        py-[5rem]
        "
        >
          <div className=" flex flex-col  items-center  space-y-2 max-w-[550px] text-center">
            <div>
              <h2 className="text-[2.5rem]">
                Lorem ipsum dolor sit amet, consectetur
              </h2>
              <p className="text-[0.9rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus elementum egestas lorem, at dictum urna sodales
                facilisis. Maecenas ut tortor quis urna tincidunt molestie.
              </p>
            </div>
            <div>
              <h2 className="text-[2.5rem]">Lorem ipsum</h2>
              <p className="text-[0.9rem]">
                Lorem ipsum dolor sit amet, consectetur
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
