import "./Button.css";

type ButtonProps = {
  text: string;
  onClick: () => void;
}; 

export function Button({ text, onClick }: ButtonProps) {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
}