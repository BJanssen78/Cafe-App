import { useState } from "react";
import { BtnInput } from "../public/BtnInput";
import { Header } from "../public/Header";

const greeting = "Welcome to our cafe";

function App() {
  const [selectDrink, setSelectDrink] = useState();
  return (
    <div className="App">
      <Header />
      {<h2>{greeting}</h2>}
      {selectDrink ? (
        "Your selected drink is "
      ) : (
        <>
          <p>Choose a drink from our menu</p>
          <BtnInput />
        </>
      )}
      {/* <BtnInput /> */}
    </div>
  );
}

export default App;
