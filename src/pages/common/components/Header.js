import React from "react";
import MenuBar from "../utils/menuBar";
import SearchBar from "../utils/searchBar";
const Header = () => {
  return (
    <div>
      <h1>헤더페이지</h1>
      <MenuBar />
      <SearchBar />
    </div>
  );
};

export default Header;
