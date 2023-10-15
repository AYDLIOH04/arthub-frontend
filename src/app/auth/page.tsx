import SignInForm from "@/components/auth/SignIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ArtHub | Auth",
};

const AuthPage = () => {
  return (
    <main>
      <SignInForm/>
    </main>
  );
};

export default AuthPage;
