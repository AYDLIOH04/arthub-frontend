import { useState } from "react";

type SelectButtonProps = {
  text: string;
  onClick: any;
  icon: any;
};

const SelectButton = ({ onClick, text, icon }: SelectButtonProps) => {
  const Icon = icon;
  return (
    <button
      onClick={onClick}
      className="flex items-center bg-second_purple xl:text-[25px] text-[30px] px-2 py-2 rounded-md hover:opacity-70 transition sm:m-0 m-1"
    >
      <div className="flex items-center xl:space-x-3">
        <p className="text-[18px] pl-2 xl:block hidden">{text}</p>
        <Icon />
      </div>
    </button>
  );
};

export default SelectButton;
