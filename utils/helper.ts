export const CountryFlag = (countryInitial: string) => {
  return `https://flagcdn.com/w160/${countryInitial?.toLowerCase()}.webp`;
};

export const formatNumInThousands = (number: number | string) => {
  // convert to string and split into different part
  const [intPart, originalDecimalPart] = number?.toString()?.split(".");

  // rever to start formartting from right hand
  const reversedNum = intPart.split("").reverse().join("");

  // loop through the value and add , after every 3 chars
  const formattedVal = reversedNum
    .match(/.{1,3}/g)
    ?.join(",")
    .split("")
    .reverse()
    .join("");

  let decimalPart = originalDecimalPart || "00";
  if (decimalPart.length === 1) {
    decimalPart += "0";
  }

  return formattedVal + "." + Number(decimalPart);
};
