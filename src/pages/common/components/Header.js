import React from "react";
import SearchBar from "../utils/searchBar";
import UserLogo from "../utils/userLogo";
import "../style/hedaer.scss"
const Header = () => {

  return (
    <>
      <div className="header">
        <SearchBar />
        <UserLogo />
      </div>
    </>
  );
};

export default Header;
