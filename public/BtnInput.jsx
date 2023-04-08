import { Buttons } from "./Buttons";
import { AvailableDrinks } from "../src/DB/data";
import { useState } from "react";

export const BtnInput = () => {
  const [OrderDrinks, setOrderedDrink] = useState(AvailableDrinks);
  const [UserChoice, setUserChoice] = useState();

  const orderDrink = (id) => {
    const orderedDrink = AvailableDrinks.filter((drink) => drink.id === id);
    setOrderedDrink(orderedDrink);
    setUserChoice(orderedDrink);
  };

  return (
    <>
      <Buttons drinks={OrderDrinks} orderDrink={orderDrink} />
    </>
  );
};
