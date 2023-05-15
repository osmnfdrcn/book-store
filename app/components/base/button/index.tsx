import { IconType } from "react-icons";

type Props = {
  icon?: IconType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  text?: string;
  variant: string;
};

const Button = ({ onClick, text, variant, icon: Icon, disabled }: Props) => {
  let style = "";

  if (variant === "rounded")
    style =
      "rounded-full bg-slate-300  hover:bg-slate-700 transition text-slate-700";
  if (variant === "primary") style = "bg-slate-700 font-bold text-xs ";
  if (variant === "secondary") style = "bg-red-400  text-xs text-slate-700";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${style} border text-xs tracking-widest  p-2 hover:opacity-80 transition text-white disabled:cursor-not-allowed `}
    >
      {Icon && <Icon className="text-black font-semibold" />}
      {text}
    </button>
  );
};

export default Button;
