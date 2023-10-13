import HeaderNav from "./HeaderNav";

export default function Header() {
  return (
    <header className="bg-indigo-400 py-4 px-5 shadow-xl text-white flex justify-between items-center w-full">
      <a className="text-[18px] sm:text-[20px] md:text-[24px] cursor-pointer hover:text-slate-300 duration-150 ease-in">
        ArtHub Logo
      </a>
      <HeaderNav />
    </header>
  );
}
