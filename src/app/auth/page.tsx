import Auth from "@/components/auth/Auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ArtHub | Auth",
};

const AuthPage = () => {
  return (
    <main>
      <Auth/>
    </main>
  );
};

export default AuthPage;
