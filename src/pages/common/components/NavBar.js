import React from "react";
import { Link } from "react-router-dom";
import "../style/navbar.scss";

const NavBar = () => {
  return (
    <div className="Navbar">
      <div className="logo">
        <div className="img"></div>
      </div>
      <div className="innerContainer">
        <div className="avatar">
          <div className="img"></div>
          <p className="name">Docu chain</p>
          <p className="position">FE Developer</p>
        </div>
        <div className="nav">
          <ul className="navList">
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
    </div>
  );
};

export default NavBar;
