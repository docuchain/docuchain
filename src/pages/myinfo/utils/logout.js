import { authService } from "../../../apis/firebase";
import { signOut } from "firebase/auth";
import { getUserInfo } from "../../../recoil/selector";
import { useRecoilState } from "recoil";
import { userInfo } from "../../../recoil/atom";
//로그아웃
import React, { useEffect } from "react";
import swal from "sweetalert";
// const LogOut = () => {
//   const nowUser = authService.currentUser;
//   const [user, setUser] = useRecoilState(userInfo);
//   useEffect(() => {
//     setUser({});
//     logoutUtil();
//     console.log("로그아웃 되었습니다");
//   }, [nowUser]);
//   const logoutUtil = async () => {
//     await signOut(authService);
//   };
//   return <div></div>;
// };
// export default LogOut;

export const logout = async () => {
  await signOut(authService);
  swal("로그아웃 되었습니다");
};
