import React, { useEffect, useState } from "react";
import Button from "../../common/components/Button";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword, //회원생성기능
  signInWithEmailAndPassword, //로그인
  signOut, //로그아웃
} from "firebase/auth";
import { authService } from "../../../apis/firebase";
import { useRecoilState, useRecoilValue } from "recoil";
import { userEmail } from "../../../recoil/atom";
import { useForm } from "react-hook-form";
//로그아웃
export const logout = async () => {
  await signOut(authService);
  console.log(authService);
};

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [userInfo, setUserInfo] = useRecoilState(userEmail);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        console.log(`${user.email}로그인 되었습니다`);
        setUserInfo(user.email);
        navigate("/myinfo");
      }
    });
  });

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

  //로그인
  const login = async (data) => {
    try {
      const user = await signInWithEmailAndPassword(
        authService,
        data.email,
        data.password
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };

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
