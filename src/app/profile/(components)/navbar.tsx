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
          className={`text-[22px] border-b-4 pb-1 duration-200 hover:text-hover ${
            pathname === "/profile/favorites" ? "text-hover border-hover" : "border-transparent"
          }`}
        >
          Favorites
        </Link>
      </li>
      <li>
        <Link
          href="/profile/settings"
          className={`text-[22px] border-b-4 pb-1 duration-200  hover:text-hover ${
            pathname === "/profile/settings" ? "text-hover border-hover" : "border-transparent"
          }`}
        >
          Settings
        </Link>
      </li>
      {isAdmin && (
        <li>
          <Link
            href="/profile/dashboard"
            className={`text-[22px] border-b-4 pb-1 duration-200 hover:text-hover ${
              pathname === "/profile/dashboard" ? "text-hover border-hover" : "border-transparent"
            }`}
          >
            Dashboard
          </Link>
        </li>
      )}
    </ul>
  );
};

export default ProfileNavbar;
