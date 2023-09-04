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
    <div className="relative bg-section py-16 my-5">
      <div className="max-w-[2520px] mx-auto px-4 sm:px-2 xl:px-20 md:px-40">
        <div className="w-full flex items-center justify-center gap-5  flex-col sm:flex-row">
          {content.map((item, idx) => {
            return (
              <div key={idx} className="relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
                <div className="absolute p-3 w-[90%] bottom-5 left-[50%] translate-x-[-50%] bg-white text-center">
                  <h4 className="text-xl">{item.title}</h4>
                  <p className="text-sm">{item.subTitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute top-[50%] left-[20%] translate-y-[-60%]">
        <Scroll navRef={navRef} label="Lorem Ipsum" vertical />
        {""}
      </div>
    </div>
  );
};

export default SectionFour;
