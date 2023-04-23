import { useState } from "react";

export const SearchDrink = ({ drinks, searchdrinks }) => {
  // console.log(drinks);
  const [userText, setUserText] = useState();

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
        />
        <p>
          <button
            className="submitBtn"
            type="submit"
            onClick={() =>
              searchdrinks(document.getElementById("searchdrink").value)
            }
          >
            Search
          </button>
        </p>
      </div>
    </>
  );
};
