import { KeyboardEventHandler } from 'react';

interface IInput {
  handlePressKey: KeyboardEventHandler<HTMLInputElement>;
  setTerm(value: string): void;
  isOpenSearch: boolean;
}

const Input: React.FC<IInput> = ({
  handlePressKey,
  setTerm,
  isOpenSearch,
}) => (
  <input
    placeholder="Pesquise aqui..."
    onKeyDown={handlePressKey}
    onChange={event => setTerm(event.target.value)}
    className={`sm:py-2 sm:text-3 sm:border-e-[1px] sm:rounded-e-2 relative flex items-center justify-left transition ease-in delay-150 px-3 h-10 max-h-10 border-[1px] border-solid rounded-s-2 rounded-e-none border-e-0 border-blue700 outline-none [lg,xl]:${
      isOpenSearch ? 'opacity-0 w-0 py-0' : 'w-full opacity-1'
    } sm:${
      isOpenSearch
        ? 'h-0 w-0 px-0 py-0 opacity-0 hidden'
        : 'h-full w-full'
    } `}
  />
);

export { Input };
