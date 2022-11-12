import React from "react";
import "./searchbar.css";

const SearchBar =({searchChange}) => {
    return(
        <div className="search-bar">
        <input type="search" placeholder="search robots" className="input-bar " onChange={searchChange}></input>
        </div>
    )
}

export default SearchBar;