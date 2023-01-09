import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
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
  );
};

export default NavBar;
