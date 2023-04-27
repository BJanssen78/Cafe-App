export const Buttons = ({ drinks, orderDrink }) => {
  return (
    <>
      {drinks.map((Item) => (
        <button
          onClick={() => orderDrink(Item.id)}
          className="button"
          id={Item.id}
          key={Item.id}
          value={Item.name}
        >
          <p>{Item.alt}</p>
          <img
            id={Item.id}
            src={Item.imgURL}
            alt={Item.alt}
            className="drink-img"
            key={Item.id}
          />
        </button>
      ))}
    </>
  );
};
