import React, { useEffect, useState } from "react";
import { userInfo } from "../../../recoil/atom";
import { getUserEmail, getUserInfo } from "../../../recoil/selector";
import { useRecoilValue, useRecoilState } from "recoil";
import { async } from "@firebase/util";
import { useForm } from "react-hook-form";
import { authService } from "../../../apis/firebase";
import { updatePassword } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { dbService } from "../../../apis/firebase";
import swal from "sweetalert";
import { Input } from "@mui/material";
import Button from "@mui/material/Button";
import { getTheme } from "../../../recoil/selector";

const MyPage = () => {
  //user state 저장
  const [user, setUser] = useRecoilState(userInfo);
  const emailValue = useRecoilValue(getUserEmail); //recoil 저장된 email 값 가져오기
  const userValue = useRecoilValue(getUserInfo);
  const nowUser = authService.currentUser;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const isBlack = useRecoilValue(getTheme);
  const [isPassword, setIsPassword] = useState(); // 비밀번호, 비밀번호 재확인 같은지여부확인
  const userData = collection(dbService, "user");

  useEffect(() => {
    getCurrentUserInfo();
  }, []);
  //비밀번호 변경함수
  const onPasswordChange = (data) => {
    if (data.password !== data.passwordRepeat) {
      setIsPassword(<p>비밀번호 입력값을 같게해주세요</p>);
      return;
    } else {
      setIsPassword(<p></p>);
      let newPassword = data.password;
      updatePassword(nowUser, newPassword)
        .then(() => {
          swal({ title: "비밀번호가 변경되었습니다", icon: "success" });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    console.log(nowUser);
  };

  //현재 로그인된 유저정보 저장
  const getCurrentUserInfo = async () => {
    const data = query(userData, where("email", "==", nowUser.email));
    const querySnapshot = await getDocs(data);
    querySnapshot.forEach((item) => {
      setUser(item.data());
    });
  };
  const onError = (error) => {
    console.log(error);
  };

  return (
    <div
      className={isBlack ? "boxLayout1 boxShadowBlack" : "boxLayout1 boxShadow"}
    >
      <div className="Myinfo">
        <h2>My Info</h2>
        <h5>이름 : {user.name}</h5>
        <h5>소속 : {user.team}</h5>
        <h5>이메일 : {user.email}</h5>
        <form onSubmit={handleSubmit(onPasswordChange, onError)}>
          <label>
            <h5 style={{ display: "inline" }}>비밀번호 : </h5>
            <Input
              className="passwordInput"
              type={"password"}
              {...register("password", {
                required: true,
                pattern: {
                  value:
                    /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8}$/,
                  message:
                    "비밀번호를 8자 이상으로 영문 대소문자, 숫자, 특수기호를 조합해서 사용하세요. ",
                },
              })}
            />
          </label>
          <br />
          <br />
          <label>
            <h5 style={{ display: "inline" }}>비밀번호 재확인 :</h5>
            <Input
              className="passwordInput"
              type={"password"}
              {...register("passwordRepeat", {
                required: true,
                pattern: {
                  value:
                    /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8}$/,
                  message:
                    "비밀번호를 8자 이상으로 영문 대소문자, 숫자, 특수기호를 조합해서 사용하세요. ",
                },
              })}
            />
          </label>
          <Button
            type="submit"
            variant="outlined"
            href="#contained-buttons"
            style={{ marginLeft: "20px" }}
          >
            변경
          </Button>
          {errors && (
            <span className="passwordError">{errors?.password?.message}</span>
          )}
          {isPassword}
        </form>
        <h5 className="myinfoInput">
          상세정보 접근권한 :
          <label>
            <input
              type={"checkbox"}
              checked={user.dashboard || false}
              disabled
            />{" "}
            대시보드
          </label>
          <label>
            <input type={"checkbox"} checked={user.block || false} disabled />{" "}
            블록
          </label>
          <label>
            <input type={"checkbox"} checked={user.trans || false} disabled />{" "}
            트랜잭션
          </label>
          <label>
            <input type={"checkbox"} checked={user.node || false} disabled />{" "}
            노드
          </label>
          <label>
            <input type={"checkbox"} checked={user.service || false} disabled />{" "}
            서비스
          </label>
        </h5>
        <h5 className="myinfoInput">
          이용중인 서비스 :
          <label>
            <input
              type={"checkbox"}
              checked={user.usingServiceA || false}
              disabled
            />{" "}
            A서비스
          </label>
          <label>
            <input
              type={"checkbox"}
              checked={user.usingServiceB || false}
              disabled
            />{" "}
            B서비스
          </label>
        </h5>
        <h5>유형 : {user.role}</h5>
        <h5>등록일자 : {nowUser.metadata.creationTime}</h5>
        <h5>상태 : 정상</h5>
      </div>
    </div>
  );
};

export default MyPage;
