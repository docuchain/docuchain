import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { authService } from "../../../apis/firebase";
import { logout } from "../../myinfo/utils/logout";
import PersonIcon from "@mui/icons-material/Person";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { userEmail, userInfo } from "../../../recoil/atom";
import { List } from "@mui/material";
import "../style/userlogo.scss";
import { getUserInfo } from "../../../recoil/selector";
const UserLogo = () => {
  const userValue = useRecoilValue(getUserInfo);
  const resetUser = useResetRecoilState(userInfo);
  const resetEmail = useResetRecoilState(userEmail);
  const [isOpen, setMenu] = useState(false); // toggle on off boolean
  const [toggleState, setToggleState] = useState(); //user logo toggle상태저장
  const nowUser = authService.currentUser;

  useEffect(() => {
    toggleChange();
  }, [userValue.email]);

  //로그인 상태에 따른 toggle변화
  const toggleChange = () => {
    setMenu((isOpen) => !isOpen);
    if (isOpen) {
      authService.onAuthStateChanged((user) => {
        //로그인 상태일때
        if (user) {
          //관리자 로그인 할 경우
          if (userValue.email === "test@test.com") {
            setToggleState(
              <>
                <List className="logoList">
                  <Link to="/myinfo">
                    <span>나의 정보</span>
                  </Link>
                </List>
                {/* 관리자 전용 클릭시 사용자관리 페이지로 넘어감 */}
                <List className="logoList">
                  <Link to="/usermanaging">
                    {" "}
                    <span>사용자 관리</span>
                  </Link>
                </List>
                <List className="logoList">
                  <Link
                    to="/"
                    onClick={() => {
                      logout();
                      resetUser();
                      resetEmail();
                    }}
                  >
                    <span>로그아웃</span>
                  </Link>
                </List>
              </>
            );
          } else {
            //일반 사용자 로그인 할 경우
            setToggleState(
              <>
                <List className="logoList">
                  <Link to="/myinfo">
                    <span>나의 정보</span>
                  </Link>
                </List>
                <List className="logoList">
                  <Link
                    to="/"
                    onClick={() => {
                      logout();
                      resetUser();
                      resetEmail();
                    }}
                  >
                    로그아웃
                  </Link>
                </List>
              </>
            );
          }
        } else {
          //로그 아웃 상태일때
          setToggleState(
            <>
              <List className="logoList">
                <Link to="/login">
                  <span>로그인</span>
                </Link>
              </List>
            </>
          );
        }
      });
    } else {
      setToggleState(<div></div>);
    }
  };

  return (
    <div>
      <div>
        <Button type="button" onClick={toggleChange}>
          <PersonIcon className="icon3" />
        </Button>
      </div>
      <div className="logoListToogle">{toggleState}</div>
    </div>
  );
};

export default UserLogo;
