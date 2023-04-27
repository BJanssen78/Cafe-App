import { Buttons } from "./Buttons";

export const BtnInput = ({ drinks, order }) => {
  return (
    <>
      <div className="btn-container">
        <Buttons drinks={drinks} orderDrink={order} />
      </div>
    </>
  );
};
