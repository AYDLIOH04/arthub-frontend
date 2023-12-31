"use client";

import Authorization from "./Authorization";
import HeaderNav from "./header-nav";
import BurgerMenu from "./burger-menu/burger-menu";
import useScrollOffset from "@/hooks/useScrollOffset";
import { usePathname } from "next/navigation";

const Header = () => {
  const scrolled = useScrollOffset(80);
  const pathname = usePathname();

  return (
    <header
      className={`${
        scrolled && "1120px:bg-page_elem_bg bg-none drop-shadow-lg"
      } ${pathname !== "/" && '1120px:bg-page_elem_bg bg-none'} py-10 font-blender uppercase px-5 1120px:flex justify-around items-center w-full fixed top-0 max-h-[68px] z-[100] duration-200 ease-out`}
    >
      <HeaderNav />
      <Authorization />
      <BurgerMenu />
    </header>
  );
};

export default Header;
