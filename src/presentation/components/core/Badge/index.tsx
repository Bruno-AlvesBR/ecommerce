import { PropsWithChildren } from 'react';

interface IBadge extends PropsWithChildren {
  count: number;
}

const Badge: React.FC<IBadge> = ({ count, children }) => (
  <div className="sm:w-8 sm:h-8 sm:max-w-8 sm:max-h-8 relative w-10 h-10 max-w-10 max-h-10 bg-red800 rounded-2 flex justify-center items-center text-white1000">
    <div
      className={`sm:text-2 sm:top-[-0.3rem] sm:right-[-0.3rem] sm:w-fit sm:px-1 absolute transition ease-in delay-150 top-[-0.5rem] right-[-0.5rem] rounded-2 bg-blue700 text-white1000 p-0 m-0 w-5 h-fit max-h-5 flex justify-center items-center text-3 ${
        count > 0 ? 'opacity-1' : 'opacity-0'
      }`}
    >
      {count}
    </div>

    {children}
  </div>
);

export { Badge };
