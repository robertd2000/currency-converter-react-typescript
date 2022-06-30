import { useEffect, useState } from "react";
import { getCurrenciesList } from "../api";
import { Converter, toCurrenciesList } from "../utils";

export interface ICurrencies {
  ID: string;
  NumCode: string;
  CharCode: string;
  Name: string;
  Value: number;
  Previous: number;
}

export const useCurrencies = (
  currencyFrom: string,
  currencyTo: string,
  quantity: number
) => {
  const [currencies, setCurrencies] = useState<ICurrencies[] | []>([]);
  const [curDate, setCurDate] = useState<string>("");
  const [value, setValue] = useState(0);

  useEffect(() => {
    const f = async () => {
      const res = await getCurrenciesList();
      setCurDate(res.Date);

      const currenciesList = toCurrenciesList(res.Valute);
      currenciesList.push({
        ID: "1",
        NumCode: "1",
        CharCode: "RUB",
        Name: "Российский рубль",
        Value: 1,
        Previous: 1
      });
      setCurrencies(currenciesList);

      const result = currencies
        ? Converter(currencies, currencyFrom, currencyTo, quantity)
        : 0;
      setValue(result);
    };
    f();
  }, [currencyFrom, currencyTo, quantity]);

  return { currencies, curDate, value };
};
