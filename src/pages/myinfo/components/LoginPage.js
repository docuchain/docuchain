import React, { useState } from "react";
import {
  createUserWithEmailAndPassword, //회원생성기능
  signInWithEmailAndPassword, //로그인
  signOut, //로그아웃
} from "firebase/auth";
import { authService } from "../../../apis/firebase";
import { async } from "@firebase/util";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
  };
  //로그아웃
  const logout = async () => {
    await signOut(authService);
    console.log(authService);
  };

  return (
    <div>
      <label>
        ID :{" "}
        <input
          type={"text"}
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        PW :{" "}
        <input
          type={"text"}
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button onClick={register}>회원가입</button>
      <button onClick={login}>로그인</button>
      <button onClick={logout}>로그아웃</button>
    </div>
  );
};

export default LoginPage;
