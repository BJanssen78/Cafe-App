import { useState } from "react";
import { BtnInput } from "../public/BtnInput";
import { Header } from "../public/Header";
import { AgeVerification } from "../public/AgeVerification";

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
      <AgeVerification />
    </div>
  );
}

export default App;
