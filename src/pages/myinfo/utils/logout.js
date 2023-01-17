import { authService } from "../../../apis/firebase";
import { signOut } from "firebase/auth";
import swal from "sweetalert";

//로그아웃
export const logout = async () => {
  await signOut(authService);
  swal("로그아웃 되었습니다");
};
