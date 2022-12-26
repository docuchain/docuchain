import React, { useEffect, useState } from "react";

const MyPage = () => {
  //user state 저장
  const [user, setUser] = useState({
    name: "홍길동",
    team: "디지털존",
    email: "abc@abc.com",
  });
  const [password, setPassword] = useState(""); //비밀번호 입력
  const [repeatPassword, setRepeatPassword] = useState(""); //비밀번호 재입력
  const [changePwRes, setChangePwRes] = useState(); //비밀번호 변경 버튼클릭시 결과저장

  //비밀번호 변경 함수
  const changePassword = (e) => {
    if (password.length < 1 || repeatPassword.length < 1) {
      setChangePwRes("비밀번호를 입력해주십시오");
    } else if (password === repeatPassword) {
      setChangePwRes("비밀번호가 변경 되었습니다");
    } else if (password !== repeatPassword) {
      setChangePwRes("비밀번호가 일치하지 않습니다");
    }
    setPassword("");
    setRepeatPassword("");
  };

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
      <h5>이메일 : {user.email}</h5>
      <form>
        <label>
          비밀번호 :{" "}
          <input
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />{" "}
        </label>
        <br />
        <label>
          비밀번호 재확인 :{" "}
          <input
            type={"password"}
            onChange={(e) => setRepeatPassword(e.target.value)}
            value={repeatPassword}
          />{" "}
        </label>

        <button type="button" onClick={changePassword}>
          변경
        </button>
      </form>
      <span>{changePwRes}</span>
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
