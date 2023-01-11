import React from "react";
import { NavLink } from "react-router-dom";
import "../style/navbar.scss";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();
  const activeStyle = {
    color: "red",
  };
  return (
    <div className="Navbar">
      {/* 영역 1 */}
      <div className="logo">
        <div className="img" onClick={() => navigate("/")}></div>
      </div>
      {/* 영역 2 */}
      <div className="innerContainer">
        <div className="avatar">
          <div className="img"></div>
          <p className="name">Docu chain</p>
          <p className="position">FE Developer</p>
        </div>
        <div className="nav">
          <ul className="navList">
            <li className="NavBar__link">
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : {})}
              >
                대시보드
              </NavLink>
            </li>
            <li className="NavBar__link">
              <NavLink
                to="/block"
                style={({ isActive }) => (isActive ? activeStyle : {})}
              >
                블록
              </NavLink>
            </li>
            <li className="NavBar__link">
              <NavLink
                to="/trans"
                style={({ isActive }) => (isActive ? activeStyle : {})}
              >
                트랜잭션
              </NavLink>
            </li>
            <li className="NavBar__link">
              <NavLink
                to="/node"
                style={({ isActive }) => (isActive ? activeStyle : {})}
              >
                노드
              </NavLink>
            </li>
            <li className="NavBar__link">
              <NavLink
                to="/service"
                style={({ isActive }) => (isActive ? activeStyle : {})}
              >
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
