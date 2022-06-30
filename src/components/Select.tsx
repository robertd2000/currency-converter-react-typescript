import { ICurrencies } from "../hooks/useCurrencies";
import { Option } from "./Option";

interface ISelect {
  currencies: ICurrencies[];
  onSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export const Select = ({ currencies, onSelect }: ISelect) => {
  return (
    <div>
      <select name="" id="" onChange={onSelect}>
        {currencies.map((item) => (
          <Option key={item.ID} name={item.Name} charCode={item.CharCode} />
        ))}
      </select>
    </div>
  );
};
