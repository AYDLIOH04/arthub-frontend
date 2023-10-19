import React, { useEffect } from 'react'
import { useAppDispatch } from './hooks';
import { setUser } from './features/auth/authSlice';
import Cookies from 'js-cookie';

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    const userCookie = Cookies.get('user');
    if (userCookie) {
      const user = JSON.parse(userCookie);
      dispatch(setUser(user));
    }
  }, []);

  return (
    <>
      {children}
    </>
  )
}
