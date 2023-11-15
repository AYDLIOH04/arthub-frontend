import PrivatePageProvider from "@/components/PageProvider";
import ProfileDetails from "@/components/profile/profile-details";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ArtHub | Profile",
  description: "Profile Page",
};

const ProfilePage = () => {
  return (
    <PrivatePageProvider>
      <ProfileDetails />
    </PrivatePageProvider>
  );
};

export default ProfilePage;
