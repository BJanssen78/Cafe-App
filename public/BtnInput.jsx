import { Buttons } from "./Buttons";
import { AvailableDrinks } from "../src/DB/data";
import { DrinkImg } from "./DrinkImg";
import { useState } from "react";

export const BtnInput = () => {
  const [OrderDrinks, setOrderedDrink] = useState(AvailableDrinks);
  const [UserChoice, setUserChoice] = useState();
  const greeting = "Welcome to our cafe!";

  const orderDrink = (id) => {
    const orderedDrink = AvailableDrinks.filter((drink) => drink.id === id);
    const orderedDrink2 = AvailableDrinks.filter((drink) => drink.id === id);
    setOrderedDrink(orderedDrink);
    setUserChoice(orderedDrink2);
    console.log(orderedDrink2);
  };

  return (
    <>
      <Buttons
        drinks={OrderDrinks.filter(
          (DrinkCatergory) => DrinkCatergory.catergory === "hot"
        )}
        orderDrink={orderDrink}
      />
      <Buttons
        drinks={OrderDrinks.filter(
          (DrinkCatergory) => DrinkCatergory.catergory === "fris"
        )}
        orderDrink={orderDrink}
      />
      <Buttons
        drinks={OrderDrinks.filter(
          (DrinkCatergory) => DrinkCatergory.catergory === "alcoholic"
        )}
        orderDrink={orderDrink}
      />
      <p>
        {UserChoice[0]
          ? "Your choice : " + UserChoice[0].name
          : "Make your choice"}
      </p>
      {/* {orderedDrink2 ? null : <h1>{greeting}</h1>} */}
      {/* <p>{UserChoice ? null : orderedDrink2}</p> */}
      {/* <p>{UserChoice ? orderedDrink2 : null}</p> */}
    </>
  );
};
