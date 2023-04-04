export const Buttons = ({ drinks, title, orderDrink }) => {
  return (
    <>
      <div className="btn-container">
        <h2>{title}</h2>
        {drinks.map((Item) => (
          <button
            onClick={() => orderDrink(drinks.id)}
            className="button"
            id={Item.id}
            key={Item.id}
            value={Item.name}
          >
            {Item.name}
          </button>
        ))}
      </div>
    </>
  );
};
