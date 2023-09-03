import useMediaQuery from '@mui/material/useMediaQuery';
import { PropsWithChildren, useRef, useState } from 'react';
import IndianaScroll from 'react-indiana-drag-scroll';

import theme from '@/presentation/styles/theme';
import { Button } from './Button';

interface ICarrousel extends PropsWithChildren {
  title?: string;
  isShowHeader?: boolean;
  itemId: string;
}

const Carrousel: React.FC<ICarrousel> = ({
  children,
  title,
  isShowHeader = false,
  itemId,
}) => {
  const infiniteScrollRef = useRef<HTMLDivElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery(theme?.breakpoints?.down('sm'));

  const [currentStep, setCurrentStep] = useState<number>(0);

  const handleScroll = (event: 'next' | 'prev') => {
    if (!infiniteScrollRef?.current && !divRef?.current) return;

    const nextEvent = event === 'next';
    const elementWidth =
      document.querySelector(`#${itemId}`).scrollWidth || 0;

    nextEvent
      ? setCurrentStep(currentStep + 1)
      : setCurrentStep(currentStep - 1);

    const valueToScroll = isMobile ? elementWidth : elementWidth * 3;

    const { scrollLeft } = infiniteScrollRef.current;
    const valueScroll = nextEvent ? valueToScroll : -valueToScroll;

    if (process.env.NODE_ENV !== 'test') {
      infiniteScrollRef.current.scrollTo({
        behavior: 'smooth',
        left: scrollLeft + valueScroll,
      });
    }
  };

  return (
    <div className="flex flex-col w-full relative gap-4 sm:gap-5">
      <div className="relative flex flex-row items-center justify-between w-full">
        {title && (
          <h2 className="text-6 font-semibold sm:text-5">{title}</h2>
        )}

        {isShowHeader && (
          <div className="flex flex-row gap-2 sm:gap-3 ml-auto">
            <Button onClick={() => handleScroll('prev')} />

            <Button
              onClick={() => handleScroll('next')}
              direction="right"
            />
          </div>
        )}
      </div>

      <div
        ref={divRef}
        className="relative flex flex-row items-center"
      >
        <div
          ref={infiniteScrollRef}
          className="justify-between flex items-center gap-4 relative snap-x snap-mandatory w-full overflow-auto scrollbar-hide"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export { Carrousel };
