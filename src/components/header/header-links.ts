interface NavLink {
  href: string;
  label: string;
}

export const links: NavLink[] = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "О нас" },
  { href: "/brushes", label: "Кисти" },
  { href: "/references", label: "Референсы" },
  { href: "/tutorials", label: "Уроки" },
];

const linkStyles = "text-white text-[16px] rounded-[8px] p-2 duration-200 easy-in"
const smallScreens = "sm:text-[24px] sm:p-3";

export const navLinkStyles = `${linkStyles} hover:bg-indigo-500 max-w-[100px] ${smallScreens}`
export const authLinkStyles = `${linkStyles} hover:bg-white hover:text-indigo-400 cursor-pointer ${smallScreens}`
export const activeNavLinkStyles = " bg-indigo-500";