import { selectAuth } from "@/store/features/auth/authSlice";
import { useAppSelector } from "@/store/hooks";

const useCurrentUser = () => useAppSelector(selectAuth);

export default useCurrentUser;
