"use client";

import useCurrentUser from "@/hooks/useCurrentUser";

const ProfileDetails = () => {
  const user = useCurrentUser();

  return (
    <div className="text-center mt-[120px] ">
      <h2 className="text-2xl">Profile Details</h2>
      <p>{user.email}</p>
    </div>
  );
};

export default ProfileDetails;
