import React, { useEffect, useState } from "react";
import SearchBar from "../utils/searchBar";
import UserLogo from "../utils/userLogo";
import Appearance from "../utils/appearance";
import "../style/hedaer.scss";
import { useLocation } from "react-router-dom";
const Header = () => {
  const [headerName, setHeaderName] = useState();
  let location = useLocation();
  useEffect(() => {
    console.log(location);
    headerNameChange();
  });

  const headerNameChange = () => {
    if (location.pathname === "/") {
      setHeaderName("대시보드");
    } else if (location.pathname === "/block") {
      setHeaderName("블록");
    } else if (location.pathname === "/trans") {
      setHeaderName("트랜잭션");
    } else if (location.pathname === "/node") {
      setHeaderName("노드");
    } else if (location.pathname === "/service") {
      setHeaderName("서비스");
    } else if (location.pathname === "/myinfo") {
      setHeaderName("나의 정보");
    } else if (location.pathname === "/usermanaging/") {
      setHeaderName("사용자 관리");
    }
  };
  return (
    <>
      <div className="Header">
        <div className="leftA">
          <div className="headerTitle">{headerName}</div>
        </div>
        <div className="rightA">
          <div className="searchBar">
            <SearchBar />
          </div>
          <div className="appearance">
            <Appearance />
          </div>
          <div className="userLogo">
            <UserLogo />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
