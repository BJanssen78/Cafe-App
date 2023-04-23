import { Buttons } from "./Buttons";
import { AvailableDrinks } from "../src/DB/data";
import { useState } from "react";

export const BtnInput = ({ drinks, order }) => {
  return (
    <>
      <Buttons drinks={drinks} orderDrink={order} />
    </>
  );
};
