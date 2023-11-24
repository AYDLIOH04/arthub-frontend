import sweetSoftLogo from "public/home/sweet-soft.svg";
import Image from "next/image";
import { BsDiscord, BsTelegram, BsGithub } from "react-icons/bs";

const MainFooter = () => {
  return (
    <footer className="font-damione sm:px-2 sm:py-2 text-white text-center w-full text-[10px] md:text-[18px] sm:text-[14px] z-10 relative mt-8">
      <div className="flex justify-center items-start sm:items-center min-h-[120px] w-full z-10 bg-page_elem_bg px-4 py-2 sm:rounded-md">
        <div className="w-1/4 flex justify-center items-center flex-col self-start mt-5">
          <h3 className="uppercase">Созданно командой</h3>
          <Image
            className="mt-3 sm:w-[100px] w-[70px] pb-2"
            src={sweetSoftLogo}
            width={50}
            alt="Sweet Soft"
          />
        </div>
        <div className="w-1/2 self-center">
          <h3 className="uppercase text-[16px] sm:text-[20px]">ARTHUB</h3>
          <p className="py-3">Всё, что нужно - в одном месте</p>
        </div>
        <div className="w-1/4 self-start mt-5">
          <h3>Ссылки</h3>
          <ul className="mt-3 flex flex-row justify-center sm:gap-5 gap-2 text-[25px] sm:text-[35px]">
            <li className="hover:text-hover linear duration-200">
              <BsDiscord />
            </li>
            <li className="hover:text-hover linear duration-200">
              <BsTelegram />
            </li>
            <li className="hover:text-hover linear duration-200">
              <BsGithub />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};


export default MainFooter;