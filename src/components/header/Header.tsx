"use client";

import Authorization from "./Authorization";
import HeaderNav from "./header-nav";
import BurgerMenu from "./burger-menu/burger-menu";
import { useEffect, useState } from "react";

const TOP_OFFSET = 80;

const Header = () => {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    if (window.scrollY >= TOP_OFFSET) {
      setShowBackground(true);
    }

    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        showBackground && "1120px:bg-page_elem_bg bg-none drop-shadow-lg"
      } py-10 font-blender uppercase px-5 1120px:flex justify-around items-center w-full fixed top-0 max-h-[68px] z-[100] duration-200 ease-out`}
    >
      <HeaderNav />
      <Authorization />
      <BurgerMenu />
    </header>
  );
};

export default Header;
