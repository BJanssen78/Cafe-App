export const AgeVerification = () => {
  const currentDate = new Date();
  const minYear = currentDate.getFullYear() - 18;
  const maxYear = currentDate.getFullYear() - 100;
  let currentDay = currentDate.getDate();
  let currentMonth = currentDate.getMonth() + 1;
  let currertYear = currentDate.getFullYear();
  const daysOfTheMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const minAge = 18;

  const checkAge = function () {
    const bDay = document.getElementById("bDay").value;
    const bMonth = document.getElementById("bMonth").value;
    const bYear = document.getElementById("bYear").value;
    const dateOfBirth = bDay + "-" + bMonth + "-" + bYear;

    console.log(dateOfBirth);

    if (bDay !== null && bMonth !== null && bYear !== null) {
      //functie
      if (
        bDay >= 1 &&
        bDay <= 31 &&
        bMonth >= 1 &&
        bMonth <= 12 &&
        bYear <= minYear &&
        bYear >= maxYear
      ) {
        if (bDay > currentDay) {
          currentDay = currentDay + daysOfTheMonth[currentMonth - 1];
          currentMonth = currentMonth - 1;
        }
        if (bMonth > currentMonth) {
          currentMonth = currentMonth + 12;
          currertYear = currertYear - 1;
        }
        const d = currentDay - bDay;
        const m = currentMonth - bMonth;
        const userAge = currertYear - bYear;

        if (userAge >= minAge) {
          console.log("Access granted");
        } else {
          console.log("Access denied");
        }
        // console.log("Your age is ", y, m, d);
      } else {
        console.log("Day or Month is invalid");
      }
    } else {
      //message all fields must be filled in
      console.log("fields are empty");
    }
  };

  return (
    <>
      <div className="AgeVerification">
        <h2>Age Verification</h2>
        <p>Enter your date of birth</p>
        <input
          type="number"
          id="bDay"
          name="bDay"
          min={1}
          max={31}
          placeholder="Day (DD)"
          required
          maxLength="2"
          pattern="[0-9]"
        />
        <input
          type="number"
          id="bMonth"
          name="bMonth"
          min={1}
          max={12}
          placeholder="Month (MM)"
          required
          maxLength="2"
          pattern="[0-9]"
        />
        <input
          type="number"
          min={maxYear}
          max={minYear}
          id="bYear"
          name="bYear"
          placeholder="Year (YYYY)"
          required
          minLength="4"
          maxLength="4"
          pattern="[0-9]"
        />
        <p>
          <button
            className="submitBtn"
            type="submit"
            onClick={() => checkAge()}
          >
            Enter
          </button>
        </p>
      </div>
    </>
  );
};
