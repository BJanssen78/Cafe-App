export const CurrentDate = () => {
  const currentDate = new Date();

  const outputHours = String(currentDate.getDate()).padStart(2, "0");
  const outputMinutes = String(currentDate.getMonth() + 1).padStart(2, "0");
  const outputSeconds = String(currentDate.getFullYear()).padStart(2, "0");
  const outputDate = outputHours + "-" + outputMinutes + "-" + outputSeconds;

  return <p>{outputDate}</p>;
};
