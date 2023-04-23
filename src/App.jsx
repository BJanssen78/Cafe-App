import { useState, useEffect } from "react";
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
    // console.log(selectDrink);
    // console.log(updateList);
  };

  useEffect(() => {
    console.log("Use effect " + selectDrink);
  });
  const [OrderDrinks, setOrderedDrink] = useState(AvailableDrinks);
  const [UserChoice, setUserChoice] = useState();

  const orderDrink = (id) => {
    const orderedDrink = AvailableDrinks.filter((drink) => drink.id === id);
    setOrderedDrink(orderedDrink);
    setUserChoice(orderedDrink);
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
          <BtnInput drinks={AvailableDrinks} order={orderDrink} />
        </>
      )}
    </div>
  );
}

export default App;
