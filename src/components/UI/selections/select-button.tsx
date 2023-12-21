import { RxCross2 } from "react-icons/rx";

type SelectButtonProps = {
  text: string;
  icon: any;
  query: string;
  currentQuery: string;
  onClick: any;
  onRemove: any;
};

const SelectButton = ({
  text,
  icon,
  onClick,
  onRemove,
  query,
  currentQuery,
}: SelectButtonProps) => {
  const selectClick = () => {
    onClick(query);
  };

  const selectRemove = (e: any) => {
    e.stopPropagation();
    onRemove();
  };

  const Icon = icon;
  return (
    <div className="relative">
      <button
        onClick={selectClick}
        className="flex items-center bg-second_purple xl:text-[25px] text-[30px] px-2 py-2 rounded-md hover:opacity-70 transition sm:m-0 m-1"
      >
        <div className="flex items-center xl:space-x-3">
          <p className="text-[18px] pl-2 xl:block hidden">{text}</p>
          <Icon />
        </div>
      </button>
      {query === currentQuery && (
        <div
          onClick={selectRemove}
          className="
          bg-main_purple hover:bg-hover
            h-[20px] w-[20px] rounded-full
            flex justify-center items-center
            absolute sm:-top-2 sm:-right-2 -top-1 -right-1 z-10
          "
        >
          <RxCross2 size={16} className="text-white" />
        </div>
      )}
    </div>
  );
};

export default SelectButton;
