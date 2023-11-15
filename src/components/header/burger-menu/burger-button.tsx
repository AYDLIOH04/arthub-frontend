import React from "react";

interface BurgerButtonProps {
  toggleMenu: () => void;
  isOpen: boolean;
}

export default function BurgerButton({
  toggleMenu,
  isOpen,
}: BurgerButtonProps) {
  return (
    <div className="block 1120px:hidden relative right-2 top-0 z-100">
      <button
        onClick={toggleMenu}
        className="text-gray-500 focus:outline-none bg-second px-3 py-3 rounded-[50%] absolute right-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white "
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
    </div>
  );
}
