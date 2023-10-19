import Link from "next/link";
import { links } from "../header-links";
import { setIsAuth } from "@/store/features/auth/authSlice"; // Удалить
import { useAppDispatch, useAppSelector } from "@/store/hooks";

interface BurgerPopupProps {
  toggleMenu: () => void;
  isOpen: boolean;
}

export default function BurgerPopup({ isOpen, toggleMenu }: BurgerPopupProps) {
  const isAuth = useAppSelector((state) => state.auth.isAuth); // Удалить
  const dispatch = useAppDispatch();  // Удалить

  return (
    <div
      className={`fixed top-[70px] right-[5px] w-0 min-h-25 shadow-xl bg-indigo-400 transition-transform transform rounded-xl ${
        isOpen ? "w-36" : "w-0"
      } overflow-hidden`}
    >
      <ul className="py-6 pl-4 space-y-3">
        {links.map((link) => (
          <li
            key={link.href}
            className="text-white text-[18px] hover:text-slate-300"
          >
            <Link href={link.href} onClick={toggleMenu}>
              {link.label}
            </Link>
          </li>
        ))}
        {isAuth ? (
          <>
            <li className="text-white text-[18px] hover:text-slate-300">
              <Link href="/profile" onClick={toggleMenu}>Профиль</Link>
            </li>
            <li className="text-white text-[18px] hover:text-slate-300 cursor-pointer">
              <a onClick={() => {dispatch(setIsAuth(false)); toggleMenu()}}>Sign Out</a>  {/* Удалить + работать через редюсер AuthSlice (вызвать ф-ию logout) */}
            </li>
          </>
        ) : (
          <li className="text-white text-[18px] hover:text-slate-300">
            <Link href="/auth" onClick={toggleMenu}>
              Sign In
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}
