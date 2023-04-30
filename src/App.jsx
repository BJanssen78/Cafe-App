import { useState, useEffect } from "react";
import { BtnInput } from "../public/BtnInput";
import { Header } from "../public/Header";
import { AgeVerification } from "../public/AgeVerification";
import { SearchDrink } from "../public/DrinkSearch";
import { AvailableDrinks } from "./DB/data";

const greeting = "Welcome to our cafe";

function App() {
  const [selectDrink, setSelectDrink] = useState();
  const [selectedDrink, setSelectedDrink] = useState();
  const [userAge, setUserAge] = useState();
  const [userAgeMsg, setUserAgeMsg] = useState();

  const verifyUserAge = (age) => {
    setUserAge(age);

    if (userAge >= 18) {
      setUserAgeMsg("Access granted");
    } else {
      setUserAgeMsg("Access denied, you are not old enough");
    }
  };

  const searchdrinks = (drinkName) => {
    const updateList = AvailableDrinks.filter((drink) =>
      drink.name.includes(drinkName)
    );
    setSelectDrink(updateList);
  };

  const orderDrink = (id) => {
    const orderedDrink = AvailableDrinks.filter((drink) => drink.id === id);
    setSelectedDrink(orderedDrink);
    console.log("Your selected drink is " + JSON.stringify(selectedDrink));
    //extra state aanamken voor geklikte button
  };

  return (
    <div className="App">
      <>
        <Header />
        {<h2>{greeting}</h2>}
        <AgeVerification age={verifyUserAge} />
        <p>{userAgeMsg}</p>

        <SearchDrink drinks={AvailableDrinks} searchdrinks={searchdrinks} />
        {selectDrink ? (
          <BtnInput drinks={selectDrink} order={orderDrink} />
        ) : (
          <>
            <p>Choose a drink from our menu</p>
            <BtnInput drinks={AvailableDrinks} order={orderDrink} />
          </>
        )}
      </>
    </div>
  );
}

export default App;
