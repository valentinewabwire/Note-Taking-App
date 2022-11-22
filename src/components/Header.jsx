import React from "react";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <div>
      <div className="header-text">Notes Application</div>
      <SearchBar />
    </div>
  );
}

export default Header;
