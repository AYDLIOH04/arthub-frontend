type InputProps = {
  id: string;
  type?: string;
  value: string;
  onChange: any;
  placeholder: string;
};

const AuthInput = ({ id, type, value, onChange, placeholder }: InputProps) => {
  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="peer placeholder:opacity-0 block min-h-[auto] w-full rounded bg-main_purple px-3 py-[0.32rem] leading-[1.8] outline-none transition-all duration-200 ease-linear border-2 border-background text-white"
        id={id}
        placeholder={placeholder}
      />
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-2 top-[6px] mb-0 max-w-[90%] origin-[0_0] leading-[1.8] text-background transition-all duration-200 ease-out ${
          value && `-translate-y-[1.5rem] scale-[0.8]`
        } peer-focus:-translate-y-[1.5rem] peer-focus:scale-[0.8] z-10 bg-main_purple px-2 py-0 m-0 rounded-xl`}
      >
        {placeholder}
      </label>
    </div>
  );
};

export default AuthInput;
