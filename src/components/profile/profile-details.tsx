'use client';

import { selectAuth } from "@/store/features/auth/authSlice"
import { useAppSelector } from "@/store/hooks"

export default function ProfileDetails() {
  const {email} = useAppSelector(selectAuth);

  return (
    <div className="text-center mt-[120px] ">
      <h2 className="text-2xl">Profile Details</h2>
      <p>{email}</p>
    </div>
  )
}
