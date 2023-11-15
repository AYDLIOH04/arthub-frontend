import { FaSearch } from "react-icons/fa";

type SearchInputProps = {
  value: string;
  onChange: any;
  onSubmit: any;
};

export default function SearchInput({
  value,
  onChange,
  onSubmit,
}: SearchInputProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="flex items-center sm:w-[320px] w-full rounded-md bg-main_purple p-[3px] leading-[1.8] text-white h-10"
    >
      <button className="text-[22px] px-2">
        <FaSearch />
      </button>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full outline-none bg-second_purple rounded h-full px-2 mr-3"
      />
    </form>
  );
}
