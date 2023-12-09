import MainFooter from "@/components/UI/main-footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ArtHub | Tutorials",
  description: "Our Tutorials",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <MainFooter />
    </>
  );
};

export default Layout;
