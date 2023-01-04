import React, { useEffect, useState } from "react";
import Button from "../../common/components/Button";
import { getUserEmail } from "../../../recoil/selector";
import { useRecoilValue } from "recoil";
import { async } from "@firebase/util";
import { useForm } from "react-hook-form";
import { authService } from "../../../apis/firebase";
import { updatePassword } from "firebase/auth";
const MyPage = () => {
  const emailValue = useRecoilValue(getUserEmail); //recoil 저장된 email 값 가져오기
  const nowUser = authService.currentUser;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isPassword, setIsPassword] = useState();

  const onPasswordChange = (data) => {
    if (data.password !== data.passwordRepeat) {
      setIsPassword(<p>비밀번호 입력값을 같게해주세요</p>);
      console.log("비밀번호 입력값을 같게해주세요");
      return;
    } else {
      setIsPassword(<p></p>);
    }
    console.log(data);
  };
  const onError = (error) => {
    console.log(error);
  };

  useEffect(() => {}, [emailValue]);
  //user state 저장
  const [user, setUser] = useState({
    name: "홍길동",
    team: "디지털존",
  });

  //비밀번호 변경 함수
  // const changePassword = (e) => {
  //   if (password.length < 1 || repeatPassword.length < 1) {
  //     setChangePwRes("비밀번호를 입력해주십시오");
  //   } else if (password === repeatPassword) {
  //     setChangePwRes("비밀번호가 변경 되었습니다");
  //   } else if (password !== repeatPassword) {
  //     setChangePwRes("비밀번호가 일치하지 않습니다");
  //   }
  //   setPassword("");
  //   setRepeatPassword("");
  // };

  //오늘 날짜 저장
  const today = new Date();
  const getToday = `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()}`;

  return (
    <div className="myinfo">
      <h2>나의 정보</h2>
      <h5>이름 : {user.name}</h5>
      <h5>소속 :{user.team}</h5>
      <h5>이메일 : {emailValue}</h5>
      <form onSubmit={handleSubmit(onPasswordChange, onError)}>
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
          />{" "}
        </label>
        <br />
        <label>
          비밀번호 재확인 :{" "}
          <input
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
        <Button type="submit">변경</Button>
        {errors && <span>{errors?.password?.message}</span>}
        {/* {errors && <span>{errors?.passwordRepeat?.message}</span>} */}
        {isPassword}
      </form>
      <h5 className="myinfo__detailauth">
        상세정보 접근권한 :
        <label>
          <input type={"checkbox"} /> 대시보드
        </label>
        <label>
          <input type={"checkbox"} /> 블록
        </label>
        <label>
          <input type={"checkbox"} /> 트랜잭션
        </label>
        <label>
          <input type={"checkbox"} /> 노드
        </label>
        <label>
          <input type={"checkbox"} /> 서비스
        </label>
      </h5>
      <h5 className="myinfo__activeservice">
        이용중인 서비스 :
        <label>
          <input type={"checkbox"} /> A서비스
        </label>
        <label>
          <input type={"checkbox"} /> B서비스
        </label>
      </h5>
      <h5>유형 : 관리자</h5>
      <h5>등록일자 : {getToday}</h5>
      <h5>상태 : 정상</h5>
    </div>
  );
};

export default MyPage;
