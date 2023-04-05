import { Buttons } from "./Buttons";
import { AvailableDrinks } from "../src/DB/data";
import { DrinkImg } from "./DrinkImg";
import { useState } from "react";

export const BtnInput = () => {
  const [OrderDrinks, setOrderedDrink] = useState(AvailableDrinks);
  const [UserChoice, setUserChoice] = useState(AvailableDrinks);
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
        title="Hot drinks"
        orderDrink={orderDrink}
      />
      <DrinkImg
        drinks={OrderDrinks.filter(
          (DrinkCatergory) => DrinkCatergory.catergory === "hot"
        )}
      />
      <Buttons
        drinks={OrderDrinks.filter(
          (DrinkCatergory) => DrinkCatergory.catergory === "fris"
        )}
        title="Fris dranken"
        orderDrink={orderDrink}
      />
      <DrinkImg
        drinks={OrderDrinks.filter(
          (DrinkCatergory) => DrinkCatergory.catergory === "fris"
        )}
      />
      <Buttons
        drinks={OrderDrinks.filter(
          (DrinkCatergory) => DrinkCatergory.catergory === "alcoholic"
        )}
        title="Alcoholic drinks"
        orderDrink={orderDrink}
      />
      <DrinkImg
        drinks={OrderDrinks.filter(
          (DrinkCatergory) => DrinkCatergory.catergory === "alcoholic"
        )}
      />
      <p>Your choice :</p>
      <p>{UserChoice.name}</p>
      {/* {orderedDrink2 ? null : <h1>{greeting}</h1>} */}
      {/* <p>{UserChoice ? null : orderedDrink2}</p> */}
      {/* <p>{UserChoice ? orderedDrink2 : null}</p> */}
    </>
  );
};
