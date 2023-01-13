import React, { useEffect, useState } from "react";
import SearchBar from "../utils/searchBar";
import UserLogo from "../utils/userLogo";
import Appearance from "../utils/appearance";
import "../style/hedaer.scss";
import { useLocation } from "react-router-dom";
import ContentsTitle from "./ContentsTitle";
import { theme } from "../../../recoil/atom";
import { getTheme } from "../../../recoil/selector";
import { useRecoilState, useRecoilValue } from "recoil";

const Header = () => {
  const [headerName, setHeaderName] = useState();
  let location = useLocation();
  useEffect(() => {
    console.log(location);
    headerNameChange();
  });
  const darkTheme = useRecoilValue(getTheme);
  const dark = {
    color: "black",
  };

  const [themeMode, setThemeMode] = useRecoilState(theme);
  const themeModeHandler = () => {
    console.log(themeMode);
    setThemeMode((prev) => !prev);
  };

  const headerNameChange = () => {
    if (location.pathname === "/") {
      setHeaderName("대시보드");
    } else if (location.pathname.includes("/block") === true) {
      setHeaderName("블록");
    } else if (location.pathname.includes("/trans") === true) {
      setHeaderName("트랜잭션");
    } else if (location.pathname.includes("/node") === true) {
      setHeaderName("노드");
    } else if (location.pathname.includes("/service") === true) {
      setHeaderName("서비스");
    } else if (location.pathname === "/myinfo") {
      setHeaderName("나의 정보");
    } else if (location.pathname === "/usermanaging/adduser") {
      setHeaderName("사용자 추가");
    } else if (location.pathname === "/usermanaging/") {
      setHeaderName("사용자 관리");
    }
  };
  return (
    <>
      <div
        className="Header"
        style={darkTheme ? { backgroundColor: "black" } : {}}
      >
        <div className="leftA">
          <div className="headerTitle">{headerName}</div>
          <ContentsTitle />
        </div>
        <div className="rightA">
          <div className="searchBar">
            <SearchBar />
          </div>
          <div className="appearance" onClick={themeModeHandler}>
            <Appearance isBlack={themeMode} />
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
