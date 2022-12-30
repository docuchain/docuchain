import React from "react";
import MenuBar from "../utils/menuBar";
import SearchBar from "../utils/searchBar";
import UserLogo from "../utils/userLogo";
const Header = () => {
  const style = {
    display: "flex",
    justifyContent: "space-between",
  };
  return (
    <>
      <h3>헤더페이지</h3>
      <div style={style}>
        <MenuBar />
        <SearchBar />
        <UserLogo />
      </div>
    </>
  );
};

export default Header;
