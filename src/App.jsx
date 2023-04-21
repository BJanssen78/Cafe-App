import { useState } from "react";
import { BtnInput } from "../public/BtnInput";
import { Header } from "../public/Header";
import { AgeVerification } from "../public/AgeVerification";
import { SearchDrink } from "../public/DrinkSearch";
import { AvailableDrinks } from "./DB/data";

const greeting = "Welcome to our cafe";

function App() {
  const [selectDrink, setSelectDrink] = useState();
  const [userAge, setUserAge] = useState();

  const searchdrinks = (drinkName) => {
    const updateList = AvailableDrinks.filter(
      (drink) => drink.name == drinkName
    );
    setSelectDrink(updateList);
  };

  return (
    <div className="App">
      <Header />
      {<h2>{greeting}</h2>}
      <AgeVerification />

      <SearchDrink drinks={AvailableDrinks} searchdrinks={searchdrinks} />
      {selectDrink ? (
        "Your selected drink is "
      ) : (
        <>
          <p>Choose a drink from our menu</p>
          <BtnInput />
        </>
      )}
    </div>
  );
}

export default App;
