import PrivatePageProvider from "@/components/PageProvider";
import { Metadata } from "next";
import ProfileNavbar from "./(components)/navbar";

export const metadata: Metadata = {
  title: "ArtHub | Profile",
  description: "Profile Page",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PrivatePageProvider>
        <div className="max-w-[1200px] mt-[100px] md:mx-auto mx-2">
          <ProfileNavbar />
          {children}
        </div>
      </PrivatePageProvider>
    </>
  );
};

export default Layout;
