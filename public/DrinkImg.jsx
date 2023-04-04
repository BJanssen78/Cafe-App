export const DrinkImg = ({ drinks }) => {
  return (
    <div className="drink-img-container">
      {drinks.map((Item) => (
        <img
          id={Item.id}
          src={Item.imgURL}
          alt={Item.alt}
          className="drink-img"
          key={Item.id}
        />
      ))}
    </div>
  );
};
