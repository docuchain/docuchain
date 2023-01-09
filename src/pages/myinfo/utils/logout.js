import { authService } from "../../../apis/firebase";
import { signOut } from "firebase/auth";
//로그아웃
export const logout = async () => {
  await signOut(authService);
};
