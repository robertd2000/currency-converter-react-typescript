import { ICurrencies } from "../hooks/useCurrencies";
interface baseType {
  Value: number;
  CharCode: string;
  Name: string;
}
const base: baseType = { Value: 1, CharCode: "RUB", Name: "Российский рубль" };

export const Converter = (
  currencyList: ICurrencies[],
  fromCurrency: string,
  toCurrency: string,
  quantity: number
): number => {
  console.log(currencyList);

  // let x = currencyList[fromCurrency] || base;
  // let y = currencyList[toCurrency] || base;
  const x = currencyList.find((item) => item.CharCode === fromCurrency) || base;
  const y = currencyList.find((item) => item.CharCode === toCurrency) || base;

  return (1 / x.Value) * y.Value * quantity;
};

export const toCurrenciesList = (currencies: any): ICurrencies[] => {
  return Object.values(currencies);
};
