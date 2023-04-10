export const CheckAge = ({ Day, Month, Year }) => {
  console.log(Day);
  console.log(Month);
  console.log(Year);
  const currentDate = new Date();
  const minYear = currentDate.getFullYear - 15;
  console.log(minYear);
  const Message = "";

  if ((day >= 1 && <= 31) &&
   (Month >= 1 && <= 12) &&
    (Year <= minYear)) {
        
    }
};
