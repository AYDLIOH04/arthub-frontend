import PrivatePageProvider from "@/components/PageProvider";
import { Metadata } from "next";
import ProfileNavbar from "./(components)/navbar";
import MainFooter from "@/components/UI/main-footer";

export const metadata: Metadata = {
  title: "ArtHub | Profile",
  description: "Profile Page",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PrivatePageProvider>
        <div className="max-w-[1200px] mt-[100px] md:mx-auto mx-2 lg:min-h-[79.6vh] md:min-h-[71.8vh] min-h-[68.7vh]">
          {/* <ProfileNavbar /> */}
          {children}
        </div>
        <MainFooter />
      </PrivatePageProvider>
    </>
  );
};

export default Layout;
