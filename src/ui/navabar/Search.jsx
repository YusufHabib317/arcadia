import { TbWorld } from "react-icons/tb";
import { IoIosArrowUp } from "react-icons/io";

const Search = () => {
  return (
    <div className="hidden sm:flex items-center gap-4">
      <div
        className="w-[100px] h-[30px] rounded-full border border-neutral-500 text-sm text-neutral-500
         flex items-center justify-center cursor-pointer hover:border-yellow-50 hover:text-yellow-50 transition-all"
      >
        Contact Us
      </div>
      <div className="flex items-center gap-2 text-[1.1rem] font-normal text-neutral-800">
        <TbWorld className="cursor-pointer" />
        <IoIosArrowUp className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Search;
