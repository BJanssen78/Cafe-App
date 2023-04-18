export const SearchDrink = (drinks, searchdrinks) => {
  console.log(drinks);
  console.log(searchdrinks);
  return (
    <>
      <input
        type="text"
        id="searchdrink"
        className="search-drink"
        placeholder="Type your search"
        name="search-drink"
        pattern="[A-Za-z]"
        onChange={() => searchdrinks(drinks.name)}
      />
    </>
  );
};
