interface IInput {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ onChange }: IInput) => {
  return <input type="number" onChange={onChange} />;
};
