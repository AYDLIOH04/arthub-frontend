import { Authorization } from "./Authorization";
import HeaderNav from "./HeaderNav";
import BurgerMenu from "./burger-menu/BurgerMenu";

export default function Header() {
  return (
    <header className="my-[15px] py-4 font-title uppercase px-5 flex justify-around items-center w-full fixed top-0 max-h-[68px] z-10 ">
      <HeaderNav />
      <Authorization />
      <BurgerMenu/>
    </header>
  );
}
