import Auth from "@/app/auth/Auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ArtHub | Auth",
};

const AuthPage = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] px-3 relative">
      <Auth />
    </div>
  );
};

export default AuthPage;
