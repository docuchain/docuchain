import React, { useEffect, useState } from "react";
import Button from "../../common/components/Button";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword, //로그인
  signOut, //로그아웃
} from "firebase/auth";
import { authService } from "../../../apis/firebase";
import { useRecoilState, useRecoilValue } from "recoil";
import { userEmail, userUid, userInfo } from "../../../recoil/atom";
import { useForm } from "react-hook-form";
// //로그아웃
// export const logout = async () => {
//   await signOut(authService);
// };

const LoginPage = () => {
  const [error, setError] = useState();
  const [recoilEmail, setRecoilEmail] = useRecoilState(userEmail);
  const [recoilUser, setRecoilUser] = useRecoilState(userInfo);
  const [userId, setUserId] = useRecoilState(userUid);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setRecoilEmail(user.email);
        setUserId(user.uid);
        navigate("/myinfo");
      } else {
        setRecoilEmail("");
        setUserId("");
      }
    });
  });

  //로그인
  const login = async (data) => {
    try {
      const user = await signInWithEmailAndPassword(
        authService,
        data.email,
        data.password
      );
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };
  //회원가입
  // const registerUser = async (data) => {
  //   try {
  //     const user = await createUserWithEmailAndPassword(
  //       authService,
  //       data.email,
  //       data.password
  //     );
  //     console.log(user);
  //   } catch (error) {
  //     console.log(error.message);
  //     setError(error.message);
  //   }
  //   setEmail("");
  //   setPassword("");
  // };

  return (
    <div>
      <form onSubmit={handleSubmit(login)}>
        <h2>로그인창</h2>
        <label>
          이메일 :{" "}
          <input
            {...register("email", {
              required: "이메일을 올바르게 입력해주세요.",
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "이메일을 올바르게 입력해주세요.",
              },
            })}
            placeholder="이메일을 입력해주세요"
          />
        </label>
        <label>
          비밀번호 :{" "}
          <input
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
            placeholder="비밀번호를 입력해주세요"
          />
        </label>

        <Button type="submit">로그인</Button>
        {errors && <span>{errors?.email?.message}</span>}
        {errors && <span>{errors?.password?.message}</span>}
        {error && <p>오류입니다. 다시 입력해주세요</p>}
      </form>
    </div>
  );
};

export default LoginPage;
