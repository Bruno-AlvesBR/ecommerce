import { InputHTMLAttributes } from 'react';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: boolean;
  fullWidth?: boolean;
}

const Input: React.FC<IInput> = ({
  label,
  error = false,
  fullWidth,
  ...props
}) => (
  <div
    className={`flex flex-col items-left ${
      fullWidth ? 'w-full' : 'w-fit'
    }`}
  >
    <>{console.log('test error', error)}</>
    <input
      {...props}
      className={`flex flex-row items-center justify-start w-full h-12 max-h-12 outline-none px-2 border-[1px] border-gray500 rounded-2 ${
        fullWidth ? 'w-full' : 'w-fit'
      } ${
        error ? 'border-red800 text-red800' : 'focus:border-blue700'
      }`}
    />

    {error && <p className="text-red800 text-3">{label}</p>}
  </div>
);

export { Input };
