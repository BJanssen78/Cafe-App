export const AgeVerification = () => {
  const checkAge = function () {
    const bDay = document.getElementById("bDay").value;
    const bMonth = document.getElementById("bMonth").value;
    const bYear = document.getElementById("bYear").value;
    const dateOfBirth = bDay + "-" + bMonth + "-" + bYear;
    console.log(dateOfBirth);

    if (bDay !== null && bMonth !== null && bYear !== null) {
      //functie
      if (bDay >= 1 && bDay <= 31) {
        console.log("Day is between 1 and 31");
      } else {
        console.log("Day is invalid");
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
          min={0}
          max={0}
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
