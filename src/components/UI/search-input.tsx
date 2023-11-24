import { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

type SearchInputProps = {
  value: string;
  onChange: any;
  onSubmit: any;
};

const SearchInput = ({ value, onChange, onSubmit }: SearchInputProps) => {
  const onSubmitSearch = (e: any) => {
    e.preventDefault();
    onSubmit()
  };

  const onClearSearch = () => {
    onChange("")
  };

  useEffect(() => {
    onSubmit()
  }, [value])

  return (
    <form
      onSubmit={onSubmitSearch}
      className="flex items-center sm:w-[320px] w-full rounded-md bg-main_purple p-[3px] leading-[1.8] text-white h-10"
    >
      <button className="text-[22px] px-2">
        <FaSearch />
      </button>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${
          value ? "mr-0" : "mr-4"
        } w-full outline-none bg-second_purple rounded h-full px-2 placeholder:text-[#c0c0c0]`}
        placeholder="Поиск"
      />
      <button
        className={`${value ? "block" : "hidden"} text-[25px] mx-1 transition`}
        onClick={onClearSearch}
        type="button"
      >
        <RxCross2 />
      </button>
    </form>
  );
};

export default SearchInput;
