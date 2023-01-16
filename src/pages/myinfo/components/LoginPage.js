import React, { useEffect, useState } from "react";
import Button from "../../common/components/Button";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword, //로그인
} from "firebase/auth";
import { authService } from "../../../apis/firebase";
import { useRecoilState, useRecoilValue } from "recoil";
import { userEmail, userUid, userInfo } from "../../../recoil/atom";
import { useForm } from "react-hook-form";
import EmailIcon from "@mui/icons-material/Email";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

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

  return (
    <div className="LoginPage">
      <div className="LoginContener">
        <div className="logo">
          <span className="img"></span>
        </div>
        <form className="login100--form" onSubmit={handleSubmit(login)}>
          {/* 이메일 ========== */}
          <label>
            <p className="alignText">
              <EmailIcon /> <span>Email</span>
            </p>
            <div>
              <input
                className="login--input"
                {...register("email", {
                  required: "이메일을 올바르게 입력해주세요.",
                  pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "이메일을 올바르게 입력해주세요.",
                  },
                })}
                placeholder="이메일을 입력해주세요"
              />
            </div>
          </label>
          <label>
            <p className="alignText">
              <VpnKeyIcon />
              <span>Password</span>
            </p>
            <div>
              <input
                className="login--input"
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
            </div>
          </label>

          {/* === 로그인 버튼 === */}
          <div>
            <div className="login-form-btn">
              <div className="login100-form-btn">
                <div className="form-bgbtn"></div>
                <Button type="submit">로그인</Button>
              </div>
            </div>
          </div>
          {errors && (
            <span className="ErrorMessage">{errors?.email?.message}</span>
          )}
          {errors && (
            <span className="ErrorMessage">{errors?.password?.message}</span>
          )}
          {error && (
            <p className="ErrorMessage">오류입니다. 다시 입력해주세요</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
