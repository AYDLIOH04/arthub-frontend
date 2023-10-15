"use client";
import Link from "next/link";
import { Authorization } from "./Authorization";
import { usePathname } from "next/navigation";
import { activeNavLinkStyles, navLinkStyles, links } from "./header-links";
import BurgerMenu from "./burger-menu/BurgerMenu";

export default function HeaderNav() {
  const pathname = usePathname();

  return (
    <div>
      <nav className="space-x-6 hidden 1120px:block">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={
              navLinkStyles +
              (pathname === link.href ? activeNavLinkStyles : "")
            }
          >
            {link.label}
          </Link>
        ))}
        <Authorization />
      </nav>
      <BurgerMenu/>
    </div>
  );
}
