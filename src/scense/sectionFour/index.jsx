import plant from "../../assets/Rectangle 23.png";
import plant1 from "../../assets/Rectangle 23 (1).png";
import plant2 from "../../assets/Rectangle 23 (2).png";
import Container from "../../ui/Container";
import Scroll from "../../ui/Scroll";

const SectionFour = ({ navRef }) => {
  const content = [
    {
      img: plant,
      title: "Lorem Ipsum",
      subTitle: "Lorem Ipsum",
    },
    {
      img: plant1,
      title: "Lorem Ipsum",
      subTitle: "Lorem Ipsum",
    },
    {
      img: plant2,
      title: "Lorem Ipsum",
      subTitle: "Lorem Ipsum",
    },
  ];
  return (
    <div className="relative bg-section py-16">
      <Container>
        <div className="flex items-center gap-5 flex-col sm:flex-row">
          {content.map((item, idx) => {
            return (
              <div key={idx} className="relative w-full">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full"
                />
                <div className="absolute p-1 w-[90%] bottom-5 left-[50%] translate-x-[-50%] bg-white text-center">
                  <h4 className="text-xl">{item.title}</h4>
                  <p className="text-sm">{item.subTitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
      <div className="absolute md:top-[50%] md:left-[4rem] translate-y-[-50%]">
        <Scroll navRef={navRef} label="Lorem Ipsum" vertical />
        {""}
      </div>
    </div>
  );
};

export default SectionFour;
