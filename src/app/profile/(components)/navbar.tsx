"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const ProfileNavbar = () => {
  const pathname = usePathname();
  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <ul className="flex flex-row gap-5 items-center md:justify-start md:ml-4 ml-0 justify-center">
      <li>
        <Link
          href="/profile/favorites"
          className={`text-[22px] relative after:h-[3px] after:absolute after:-bottom-1.5  after:transition-all duration-300 after:duration-300 hover:text-hover hover:after:bg-hover ${
            pathname === "/profile/favorites"
              ? "text-hover after:bg-hover after:w-full after:left-0"
              : "after:w-[36px] after:bg-white after:left-[calc(50%-18px)]"
          }`}
        >
          Избранное
        </Link>
      </li>
      <li>
        <Link
          href="/profile/settings"
          className={`text-[22px] relative after:h-[3px] after:absolute after:-bottom-1.5  after:transition-all duration-300 after:duration-300 hover:text-hover hover:after:bg-hover ${
            pathname === "/profile/settings"
              ? "text-hover after:bg-hover after:w-full after:left-0"
              : "after:w-[36px] after:bg-white after:left-[calc(50%-18px)]"
          }`}
        >
          Настройки
        </Link>
      </li>
      {isAdmin && (
        <li>
          <Link
            href="/profile/dashboard"
            className={`text-[22px] relative  after:h-[3px]  after:absolute after:-bottom-1.5  after:transition-all duration-300 after:duration-300 hover:text-hover hover:after:bg-hover ${
              pathname === "/profile/dashboard"
                ? "text-hover after:bg-hover after:w-full after:left-0"
                : "after:w-[36px] after:bg-white after:left-[calc(50%-18px)]"
            }`}
          >
            Админ панель
          </Link>
        </li>
      )}
    </ul>
  );
};

export default ProfileNavbar;
