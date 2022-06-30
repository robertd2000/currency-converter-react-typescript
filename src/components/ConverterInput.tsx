import { Select } from "../components/Select";
import { Input } from "../components/Input";
import { useState } from "react";
import { useCurrencies } from "../hooks/useCurrencies";

export const ConverterInput = () => {
  const [currencyFrom, setCurrencyTo] = useState("USD");
  const [currencyTo, setCurrencyFrom] = useState("RUB");
  const [quantity, setQuantity] = useState(1);

  const { currencies, curDate, value } = useCurrencies(
    currencyFrom,
    currencyTo,
    +quantity
  );

  return (
    <div>
      <Input onChange={(e) => setQuantity(+e.target.value)} />
      {quantity}
      {currencyFrom}
      {currencyTo}
      {value}
      <Select
        currencies={currencies}
        onSelect={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setCurrencyFrom(e.target.value)
        }
      />
      <Select
        currencies={currencies}
        onSelect={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setCurrencyTo(e.target.value)
        }
      />
    </div>
  );
};
