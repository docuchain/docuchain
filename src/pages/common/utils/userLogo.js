import React, { useEffect, useState } from "react";
import LoginPage from "../../myinfo/components/LoginPage";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { authService } from "../../../apis/firebase";
import { logout } from "../../myinfo/components/LoginPage";
const UserLogo = () => {
  const [isOpen, setMenu] = useState(false); // toggle on off boolean

  const [toggleState, setToggleState] = useState(); //toggle상태저장

  //로그인 상태에 따른 toggle변화
  const toggleChange = () => {
    setMenu((isOpen) => !isOpen);
    if (isOpen) {
      authService.onAuthStateChanged((user) => {
        if (user) {
          setToggleState(
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
                <Link to="/" onClick={logout}>
                  로그아웃
                </Link>
              </li>
            </ul>
          );
        } else {
          setToggleState(
            <ul>
              <li>
                <Link to="/login">로그인</Link>
              </li>
            </ul>
          );
        }
      });
    } else {
      setToggleState(<div></div>);
    }
  };

  return (
    <div>
      <Button type="button" onClick={toggleChange}>
        사용자버튼자리
      </Button>
      {toggleState}
    </div>
  );
};

export default UserLogo;
