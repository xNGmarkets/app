import { useEffect, useState } from "react";

const useExchangeRate = () => {
  const [rate, setRate] = useState(0);
  useEffect(() => {
    // fetch exchange rate from an API
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch(
          "https://api.exchangerate-api.com/v4/latest/USD",
        );
        const data = await response.json();
        setRate(data.rates.NGN);
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
      }
    };

    fetchExchangeRate();
  }, []);
  return rate;
};

export default useExchangeRate;
