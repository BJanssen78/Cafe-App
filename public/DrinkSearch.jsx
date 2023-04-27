import { useState } from "react";

export const SearchDrink = ({ drinks, searchdrinks }) => {
  return (
    <>
      <div>
        <input
          type="text"
          id="searchdrink"
          className="search-drink"
          placeholder="Type your search"
          name="search-drink"
          pattern="[A-Za-z]"
          onChange={(e) => searchdrinks(e.target.value.toLowerCase())}
        />
      </div>
    </>
  );
};
