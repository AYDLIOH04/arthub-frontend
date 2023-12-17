import PrivatePageProvider from "@/components/PageProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ArtHub | Profile",
  description: "Profile Page",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PrivatePageProvider>
        {/* <ProfileNavbar /> */}
        {children}
      </PrivatePageProvider>
    </>
  );
};

export default Layout;
