import Container from "../../ui/Container";
import plant from "../../assets/Rectangle 19.png";
import Scroll from "../../ui/Scroll";

const SectionTwo = ({ navRef }) => {
  return (
    <div className="py-16 relative">
      <div className="absolute w-[16em] left-[50%] translate-x-[-50%] bottom-[-40px] sm:bottom-[-5] sm:left-[85%]">
        <img src={plant} alt="photo" />
        <div className="absolute bottom-0 left-[-10px]">
          <Scroll navRef={navRef} label="Lorem Ipsum" vertical />
        </div>
      </div>
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

      <Container>
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
      </Container>
    </div>
  );
};

export default SectionTwo;
