export const AgeVerification = () => {
  const checkAge = function () {
    const bDay = document.getElementById("bDay").value;
    const bMonth = document.getElementById("bMonth").value;
    const bYear = document.getElementById("bYear").value;
    const dateOfBirth = bDay + "-" + bMonth + "-" + bYear;
    console.log(dateOfBirth);

    if ((bDay, bMonth, bYear !== null)) {
      //functie
      if (bDay >= 1 && <= 31) {
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
          type="text"
          id="bDay"
          name="bDay"
          placeholder="Day"
          required
          maxLength="2"
          pattern="[0-9]"
        />
        <input
          type="text"
          id="bMonth"
          name="bMonth"
          placeholder="Month"
          required
          maxLength="2"
          pattern="[0-9]"
        />
        <input
          type="text"
          id="bYear"
          name="bYear"
          placeholder="Year"
          required
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
