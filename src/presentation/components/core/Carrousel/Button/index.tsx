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
    className={`px-6 border-0 transition-all ease-in delay-[50] hover:text-red800 outline-blue700 items-center justify-center rounded-2 overflow-hidden hover:brightness-90 bg-white1000 ${
      isScrollButton
        ? 'flex flex-1 h-full sm:hidden'
        : 'hidden h-fit sm:flex py-1'
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
