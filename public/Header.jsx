import LiveClockUpdate from "./Clock";
import { CurrentDate } from "./CurrentDate";

// LiveClockUpdate is geleend van een ander
//  src=https://codesandbox.io/s/lbl5o?file=/src/Components/LiveClockUpdate.js
//  Creator : Adinarayana Reddy JC

export const Header = () => {
  return (
    <>
      <header className="header">
        <a href="#" title="web title" className="header-title-link">
          <span className="Main-Title">Brown Cafe</span>
        </a>
        <span className="date-clock">
          <CurrentDate />

          <p>
            <LiveClockUpdate />
          </p>
        </span>
      </header>
    </>
  );
};
