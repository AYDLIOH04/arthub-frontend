import { Authorization } from "./Authorization";
import HeaderNav from "./HeaderNav";
import BurgerMenu from "./burger-menu/BurgerMenu";

export default function Header() {
  return (
    <header className="my-[15px] py-4 font-blender uppercase px-5 1120px:flex justify-around items-center w-full fixed top-0 max-h-[68px] z-[100]">
      <HeaderNav />
      <Authorization />
      <BurgerMenu/>
    </header>
  );
}
