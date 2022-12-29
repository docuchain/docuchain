import React, { useEffect, useState } from "react";
import Button from "../../common/components/Button";
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

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        console.log(`${user.email}로그인 되었습니다`);
      } else {
        console.log("로그아웃 되었습니다");
      }
    });
  }, []);
  //회원가입
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        authService,
        email,
        password
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
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
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h2>로그인창</h2>
      <label>
        ID :{" "}
        <input
          type={"text"}
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
      <Button onClick={register}>회원가입</Button>
      <Button onClick={login}>로그인</Button>
      <Button onClick={logout}>로그아웃</Button>
    </div>
  );
};

export default LoginPage;
