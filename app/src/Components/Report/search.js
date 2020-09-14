import React, { useState } from "react";

export const Search = ({search}) => {
    let [searchInput, setSearchInput] = useState("")
    const handleChange = e => {
        setSearchInput(e.target.value);
    }
    const handleSubmit = () => {
        search(searchInput);
    }
    const handleCancel = () => {
        setSearchInput("");
        // why does it not update searchInput automatically?
        searchInput = "";
        search(searchInput);
    }
    
    return (
        <div>
            <input
                classname="search"
                type="text"
                placeholder="Search"
                value={searchInput}
                onChange={handleChange}
            />
            <button 
                onClick={handleSubmit}>Ok</button>
            <button 
                onClick={handleCancel}>Cancel</button>
        </div>
    )
};