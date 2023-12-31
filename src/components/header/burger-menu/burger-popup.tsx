import Link from "next/link";
import { links } from "../links-data";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { logout } from "@/store/features/auth/authSlice";
import { toast } from "react-toastify";
import { useLogoutMutation } from "@/store/features/auth/authApi";
import { useRouter } from "next/navigation";

interface BurgerPopupProps {
  toggleMenu: () => void;
  isOpen: boolean;
}

const BurgerPopup = ({ isOpen, toggleMenu }: BurgerPopupProps) => {
  const router = useRouter();
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const dispatch = useAppDispatch();
  const [logoutApi, { isSuccess }] = useLogoutMutation();

  const signOut = async () => {
    toggleMenu();
    await logoutApi({});
    if (isSuccess) {
      dispatch(logout());
      toast.success("Выход успешен");
      router.push('/');
    }
  };

  return (
    <div
      className={`fixed top-[90px] right-[5px] w-0 min-h-25 shadow-xl bg-second transition-transform transform rounded-xl ${
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
              <Link href="/profile/favorites" onClick={toggleMenu}>
                Профиль
              </Link>
            </li>
            <li className="text-white text-[18px] hover:text-slate-300 cursor-pointer">
              <a onClick={signOut}>Sign Out</a>{" "}
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
};

export default BurgerPopup;
