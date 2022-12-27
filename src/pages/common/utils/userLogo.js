import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const UserLogo = () => {
  const [isOpen, setMenu] = useState(false); //on off boolean
  //토글 활성화 함수
  const setToggleMenu = () => {
    setMenu((isOpen) => !isOpen);
  };
  return (
    <div>
      <Button type="button" onClick={setToggleMenu}>
        사용자버튼자리
      </Button>
      {isOpen && (
        <ul>
          <li>이메일자리</li>
          <li>
            <Link to="/myinfo">나의 정보</Link>
          </li>
          {/* 관리자 전용 클릭시 사용자관리 페이지로 넘어감 */}
          <li>
            <Link to="/usermanaging">사용자 관리</Link>
          </li>
          <li>
            <Link to="/">로그아웃</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default UserLogo;
