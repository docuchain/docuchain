import React from "react";
import { Link } from "react-router-dom";
import "../style/navbar.scss"

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo"></div>
      <div className="avatar">
        <div className="avatarImg"></div>
        <p className="avatarName">Docu chain</p>
        <p className="avatarJob">FE Developer</p>
      </div>
      <div className="navList">
        <ul className="NavBar">
        <li className="NavBar__link">
          <Link to="/">대시보드</Link>
        </li>
        <li className="NavBar__link">
          <Link to="/block">블록</Link>
        </li>
        <li className="NavBar__link">
          <Link to="/trans">트랜잭션</Link>
        </li>
        <li className="NavBar__link">
          <Link to="/node">노드</Link>
        </li>
        <li className="NavBar__link">
          <Link to="/service">서비스</Link>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default NavBar;
