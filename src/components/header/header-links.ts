interface NavLink {
  href: string;
  label: string;
}

export const links: NavLink[] = [
  { href: "/", label: "Главная" },
  { href: "/programs", label: "Программы" },
  { href: "/brushes", label: "Кисти" },
  { href: "/references", label: "Референсы" },
  { href: "/tutorials", label: "Уроки" },
];

const linkStyles = "uppercase text-[16px] p-2 duration-200 easy-in inline"
const smallScreens = "sm:text-[16px] sm:p-3";

export const navLinkStyles = `${linkStyles} hover:text-hover max-w-[100px] ${smallScreens}`
export const authLinkStyles = `${linkStyles} border-white border-2 hover:border-hover hover:bg-hover cursor-pointer rounded-[20px] ${smallScreens}`
export const activeNavLinkStyles = " text-hover";