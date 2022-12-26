import React, { useState } from "react";

const MyPage = () => {
  //user state 저장
  const [user, setUser] = useState({
    name: "홍길동",
    team: "디지털존",
    email: "abc@abc.com",
  });
  const today = new Date();
  //오늘 날짜 저장
  const getToday = `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()}`;

  return (
    <div>
      <h2>나의 정보</h2>
      <h5>이름 : {user.name}</h5>
      <h5>소속 :{user.team}</h5>
      <h5>이메일 : {user.email}</h5>
      <label>
        비밀번호 : <input type={"text"} />{" "}
      </label>
      <br />
      <label>
        비밀번호 재확인 : <input type={"text"} />{" "}
      </label>
      <button>변경</button>
      <h5>
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
      <h5>
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
