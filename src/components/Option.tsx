interface IOption {
  name: string;
  charCode: string;
}

export const Option = ({ name, charCode }: IOption) => {
  return <option value={charCode}>{name}</option>;
};
