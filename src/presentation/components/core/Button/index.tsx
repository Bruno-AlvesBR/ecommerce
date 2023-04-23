import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from 'react';

interface IButton
  extends DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    PropsWithChildren {
  fullWidth?: boolean;
  transparent?: boolean;
}

const Button: React.FC<IButton> = ({
  children,
  fullWidth = false,
  transparent = false,
  className,
  ...props
}) => (
  <button
    {...props}
    className={`active:brightness-90 active:outline-inherit hover:brightness-75 focus:brightness-75  py-2 px-4 rounded-1 text-4 font-bold min-w-[165px] overflow-hidden flex items-center justify-center h-fit text-white1000 bg-blue700 transition ease-in delay-050 cursor-pointer outline-none border-none ${
      transparent && 'bg-transparent'
    } ${fullWidth ? 'w-full' : 'w-fit'} ${className}`}
  >
    {children}
  </button>
);

export { Button };
