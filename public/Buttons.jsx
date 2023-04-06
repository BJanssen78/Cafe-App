export const Buttons = ({ drinks, orderDrink }) => {
  return (
    <>
      <div className="btn-container">
        {drinks.map((Item) => (
          <button
            onClick={() => orderDrink(Item.id)}
            className="button"
            id={Item.id}
            key={Item.id}
            value={Item.name}
          >
            <p>{Item.name}</p>
            <img
              id={Item.id}
              src={Item.imgURL}
              alt={Item.alt}
              className="drink-img"
              key={Item.id}
            />
          </button>
        ))}
      </div>
    </>
  );
};
