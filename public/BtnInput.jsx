import { Buttons } from "./Buttons";
import { AvailableDrinks } from "../src/DB/data";
import { DrinkImg } from "./DrinkImg";
import { useState } from "react";

export const BtnInput = () => {
  const [OrderDrinks, setOrderedDrink] = useState(AvailableDrinks);

  const orderDrink = (id) => {
    const orderedDrink = AvailableDrinks.filter((drink) => drink.id === id);
    setOrderedDrink(orderedDrink);
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
    </>
  );
};
