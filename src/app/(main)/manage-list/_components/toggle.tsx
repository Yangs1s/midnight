interface ToggleProps {
  id: string;
  isChecked: boolean;
  onChange: (id: string, checked: boolean) => void;
  disabled?: boolean;
}

const Toggle = ({ id, isChecked, onChange, disabled = false }: ToggleProps) => {
  const handleToggle = () => {
    if (!disabled) {
      onChange(id, !isChecked);
    }
  };

  return (
    <button
      id={id}
      type="button"
      role="switch"
      aria-checked={isChecked}
      onClick={handleToggle}
      disabled={disabled}
      className={`
          relative inline-flex w-[34px] h-5 items-center rounded-full 
          transition-colors duration-300 ease-in-out
          ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
          ${isChecked ? "bg-primary hover:bg-primary-strong" : "bg-background-neutral hover:bg-background-fill-strong bg-white/20"}
        `}
    >
      <span
        className={`
            inline-block m-[2px] h-4 w-4 rounded-full bg-white shadow-toggle
            transform transition-transform duration-300 ease-in-out
            ${isChecked ? "translate-x-[14px]" : ""}
          `}
      />
    </button>
  );
};

export default Toggle;
