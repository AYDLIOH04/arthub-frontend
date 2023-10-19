import PrivatePageProvider from "@/components/PageProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ArtHub | Profile",
  description: "Profile Page",
};

const ProfilePage = () => {
  return (
    <PrivatePageProvider>
      <h1>Profile Page</h1>
    </PrivatePageProvider>
  );
};

export default ProfilePage;
