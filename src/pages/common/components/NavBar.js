import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../style/navbar.scss";
import { useNavigate } from "react-router-dom";
import { authService } from "../../../apis/firebase";
import { useRecoilState, useRecoilValue } from "recoil";
import { getTheme, getUserInfo } from "../../../recoil/selector";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { getUserEmail } from "../../../recoil/selector";

const NavBar = () => {
  const isDark = useRecoilValue(getTheme);
  const nowUser = authService.currentUser;
  const userEmail = useRecoilValue(getUserEmail);
  const userValue = useRecoilValue(getUserInfo);
  const navigate = useNavigate();
  const [tab, setTab] = useState("");

  return (
    <div className="Navbar">
      {/* 영역 1 */}
      <div className="logo">
        <div className="img" onClick={() => navigate("/")}></div>
      </div>
      {/* 영역 2 */}
      <div className="innerContainer">
        <div className="avatar">
          <div
            className={
              userEmail === "test@test.com"
                ? "superAdminImg"
                : userEmail !== ""
                ? "userImg"
                : "logoutImg"
            }
          >
            {userEmail === "" ? (
              <PersonOutlineIcon className="defaultIcon" />
            ) : (
              <div></div>
            )}{" "}
          </div>
          <div className="img_wrap">
            <div className="circle top"></div>
            <div className="circle bottom"></div>
          </div>
          <p className="name">{userValue.email}</p>
          <p className="position">직책(권한)</p>
        </div>
        <div className="nav">
          <ul className="navList">
            <li className={`li ${tab === "dash" ? "navlinkClicked" : ""}`}>
              <NavLink to="/" onClick={() => setTab("dash")}>
                대시보드
              </NavLink>
            </li>
            <li className={`li ${tab === "block" ? "navlinkClicked" : ""}`}>
              <NavLink to="/block" onClick={() => setTab("block")}>
                블록
              </NavLink>
            </li>
            <li className={`li ${tab === "trans" ? "navlinkClicked" : ""}`}>
              <NavLink to="/trans" onClick={() => setTab("trans")}>
                트랜잭션
              </NavLink>
            </li>
            <li className={`li ${tab === "node" ? "navlinkClicked" : ""}`}>
              <NavLink to="/node" onClick={() => setTab("node")}>
                노드
              </NavLink>
            </li>
            <li className={`li ${tab === "service" ? "navlinkClicked" : ""}`}>
              <NavLink to="/service" onClick={() => setTab("service")}>
                서비스
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
