'use client';

import { selectAuth } from "@/store/features/auth/authSlice"
import { useAppSelector } from "@/store/hooks"

export default function ProfileDetails() {
  const {name} = useAppSelector(selectAuth);

  return (
    <div>
      <h2>Profile Details</h2>
      <p>{name}</p>
    </div>
  )
}
