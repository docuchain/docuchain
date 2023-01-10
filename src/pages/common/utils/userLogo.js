import React, { useEffect, useState } from "react";
import LoginPage from "../../myinfo/components/LoginPage";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { authService } from "../../../apis/firebase";
import { logout } from "../../myinfo/components/LoginPage";
import PersonIcon from "@mui/icons-material/Person";
import { flexbox, style } from "@mui/system";
import { useRecoilValue } from "recoil";
import { getUserEmail } from "../../../recoil/selector";

const UserLogo = () => {
  const emailValue = useRecoilValue(getUserEmail);

  const [isOpen, setMenu] = useState(false); // toggle on off boolean
  const [toggleState, setToggleState] = useState(); //user logo toggle상태저장

  const style = {
    // float: "right",
    // position: "absolute",
    position: "fixed",
    // width: "130px",
    // height: "90px",
    //
  };
  //로그인 상태에 따른 toggle변화
  const toggleChange = () => {
    setMenu((isOpen) => !isOpen);
    if (isOpen) {
      authService.onAuthStateChanged((user) => {
        //로그인 상태일때
        if (user) {
          //관리자 로그인 할 경우
          if (user.uid === "8GSCb6U6zmUsaLm2KhN6o9OSLBh2") {
            setToggleState(
              <ul>
                {/* <li>{emailValue}</li> */}
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
            //일반 사용자 로그인 할 경우
            setToggleState(
              <ul>
                {/* <li>{emailValue}</li> */}
                <li>
                  <Link to="/myinfo">나의 정보</Link>
                </li>
                <li>
                  <Link to="/" onClick={logout}>
                    로그아웃
                  </Link>
                </li>
              </ul>
            );
          }
        } else {
          //로그 아웃 상태일때
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
    <>
      <div className="userLogoBtn headerbtn">
        <Button type="button" onClick={toggleChange}>
          <PersonIcon className="icon3" />
        </Button>
        {toggleState}
      </div>
    </>
  );
};

export default UserLogo;
