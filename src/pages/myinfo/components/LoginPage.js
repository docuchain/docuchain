import React, { useEffect, useState } from "react";
import Button from "../../common/components/Button";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword, //회원생성기능
  signInWithEmailAndPassword, //로그인
  signOut, //로그아웃
} from "firebase/auth";
import { authService } from "../../../apis/firebase";
import { async } from "@firebase/util";

//로그아웃
export const logout = async () => {
  await signOut(authService);
  console.log(authService);
};

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        console.log(`${user.email}로그인 되었습니다`);
        navigate("/myinfo");
      } else {
        console.log("로그아웃 되었습니다");
      }
    });
  }, []);

  //회원가입
  const registerUser = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        authService,
        email,
        password
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
    setEmail("");
    setPassword("");
  };

  //로그인
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        authService,
        email,
        password
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <form>
        <h2>로그인창</h2>
        <label>
          ID :{" "}
          <input
            type={"email"}
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          PW :{" "}
          <input
            type={"password"}
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <Button onClick={registerUser}>회원가입</Button>
        <Button onClick={login}>로그인</Button>
        {/* <Button onClick={logout}>로그아웃</Button> */}
        {error && <p>다시 입력해 주십시오</p>}
      </form>
    </div>
  );
};

export default LoginPage;
