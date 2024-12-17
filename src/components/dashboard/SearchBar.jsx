import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className="flex items-center w-2/4 px-5 rounded-md bg-slate-100">
      <input
        type="text"
        placeholder="Search Notes"
        className="w-full text-xm bg-transparent py-[11px] outline-none"
        value={value}
        onChange={onChange}
      />
      {value && (
        <IoMdClose className="mr-3 text-xl cursor-pointer text-slate-500 hover:text-black" />
      )}
      <FaMagnifyingGlass
        className="cursor-pointer text-slate-400 hover:text-black"
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
