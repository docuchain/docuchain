import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../style/navbar.scss";
import { useNavigate } from "react-router-dom";
import { authService } from "../../../apis/firebase";
import { useRecoilState, useRecoilValue } from "recoil";
import { getUserInfo } from "../../../recoil/selector";
const NavBar = () => {
  const nowUser = authService.currentUser;
  const userValue = useRecoilValue(getUserInfo);
  const navigate = useNavigate();

  // =============================

  // let data = ["대시보드", "블록", "트랜잭션", "노드", "서비스"];

  const [tab, setTab] = useState("");

  // ==========================

  return (
    <div className="Navbar">
      {/* 영역 1 */}
      <div className="logo">
        <div className="img" onClick={() => navigate("/")}></div>
      </div>
      ;{/* 영역 2 */}
      <div className="innerContainer">
        <div className="avatar">
          <div className="img"></div>
          <p className="name">{userValue.email}</p>
          <p className="position">FE Developer</p>
        </div>
        <div className="nav">
          <ul className="navList">
            <li
              className={`li ${tab === "dash" ? "navlinkClicked" : ""}`}
              onClick={() => setTab("dash")}
            >
              <NavLink to="/">대시보드</NavLink>
            </li>
            <li
              className={`li ${tab === "block" ? "navlinkClicked" : ""}`}
              onClick={() => setTab("block")}
            >
              <NavLink to="/block">블록</NavLink>
            </li>
            <li
              className={`li ${tab === "trans" ? "navlinkClicked" : ""}`}
              onClick={() => setTab("trans")}
            >
              <NavLink to="/trans">트랜잭션</NavLink>
            </li>
            <li
              className={`li ${tab === "node" ? "navlinkClicked" : ""}`}
              onClick={() => setTab("node")}
            >
              <NavLink to="/node">노드</NavLink>
            </li>
            <li
              className={`li ${tab === "service" ? "navlinkClicked" : ""}`}
              onClick={() => setTab("service")}
            >
              <NavLink to="/service">서비스</NavLink>
            </li>
          </ul>
        </div>
      </div>
      ;
    </div>
  );
};

export default NavBar;
