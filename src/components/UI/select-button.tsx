type SelectButtonProps = {
  text: string;
  onClick: any;
  children: any;
};

const SelectButton = ({ onClick, text, children }: SelectButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center bg-main_purple xl:text-[25px] text-[30px] px-2 py-2 rounded-md hover:opacity-80 transition sm:m-0 m-1"
    >
      <div className="flex items-center xl:space-x-3">
        <p className="text-[18px] pl-2 xl:block hidden">{text}</p>
        {children}
      </div>
    </button>
  );
};

export default SelectButton;
