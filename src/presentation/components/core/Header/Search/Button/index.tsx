import { Ref } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

interface IButton {
  buttonRef: Ref<HTMLButtonElement>;
  setIsOpenSearch(value: boolean): void;
  isOpenSearch: boolean;
}

const Button: React.FC<IButton> = ({
  buttonRef,
  setIsOpenSearch,
  isOpenSearch,
}) => (
  <button
    ref={buttonRef}
    onClick={() => setIsOpenSearch(!isOpenSearch)}
    className={`sm:w-8 sm:h-8 sm:max-w-8 sm:max-h-8 sm:rounded-2 relative transition ease-in delay-050 flex items-center justify-center bg-red800 text-white1000 h-10 w-10 max-h-10 max-w-10 p-2 hover:brightness-75 ${
      isOpenSearch ? 'rounded-2' : 'rounded-e-2'
    }`}
  >
    {isOpenSearch ? (
      <SearchIcon style={{ backgroundColor: 'transparent' }} />
    ) : (
      <CloseIcon style={{ backgroundColor: 'transparent' }} />
    )}
  </button>
);

export { Button };
