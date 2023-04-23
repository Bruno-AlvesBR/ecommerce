import RightArrow from '@mui/icons-material/ArrowForwardIos';

interface IButton {
  onClick(): void;
  isScrollButton?: boolean;
  direction?: 'left' | 'right';
}

const Button: React.FC<IButton> = ({
  onClick,
  isScrollButton = false,
  direction = 'left',
}) => (
  <button
    onClick={onClick}
    className={`border-0 transition-all ease-in delay-[50] hover:text-red800 outline-blue700 items-center justify-center rounded-2 overflow-hidden hover:brightness-90 bg-white1000 ${
      isScrollButton
        ? 'flex sm:hidden px-2 h-full'
        : 'hidden sm:flex py-1 h-fit '
    }`}
  >
    {direction === 'left' ? (
      <RightArrow className="rotate-[180deg]" />
    ) : (
      <RightArrow />
    )}
  </button>
);

export { Button };
