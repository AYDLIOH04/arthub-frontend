import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ArtHub | Dashboard",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <AdminPageProvider> */}
        {children}
      {/* </AdminPageProvider> */}
    </>
  );
};

export default Layout;
