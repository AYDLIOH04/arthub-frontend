"use client";
import Link from "next/link";
import { Authorization } from "./Authorization";
import { usePathname } from "next/navigation";
import { activeNavLinkStyles, navLinkStyles, links } from "./links-data";
import BurgerMenu from "./burger-menu/burger-menu";

export default function HeaderNav() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="space-x-3 hidden 1120px:block">
        {links.map((link) => (
          <li key={link.href} className="inline">
            <Link
              href={link.href}
              className={
                navLinkStyles +
                (pathname === link.href ? activeNavLinkStyles : "")
              }
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
