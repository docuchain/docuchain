import React from "react";
import SearchBar from "../utils/searchBar";
import UserLogo from "../utils/userLogo";
const Header = () => {
  const style = {
    display: "flex",
    justifyContent: "space-between",
  };
  return (
    <>
      <div style={style}>
        <SearchBar />
        <UserLogo />
      </div>
    </>
  );
};

export default Header;
