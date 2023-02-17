import PrevArrow from '@mui/icons-material/ArrowBackIos';
import RightArrow from '@mui/icons-material/ArrowForwardIos';
import useMediaQuery from '@mui/material/useMediaQuery';
import { PropsWithChildren, useRef } from 'react';

import theme from '@/styles/theme';
import { Button, Container, ContentInfiniteScroll } from './styles';

interface ICarrousel extends PropsWithChildren {
  contentSize: number;
}

const Carrousel: React.FC<ICarrousel> = ({
  children,
  contentSize,
}) => {
  const infiniteScrollRef = useRef<HTMLDivElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  const isMobile = useMediaQuery(theme?.breakpoints?.down('sm'));

  const handleScroll = (event: 'next' | 'prev') => {
    if (!infiniteScrollRef && !divRef) return;

    const { scrollLeft } = infiniteScrollRef.current;

    const valueScroll = event === 'next' ? contentSize : -contentSize;

    if (process.env.NODE_ENV !== 'test') {
      infiniteScrollRef.current.scrollTo({
        behavior: 'smooth',
        left: scrollLeft + valueScroll,
      });
    }
  };

  return (
    <Container>
      <Button onClick={() => handleScroll('prev')}>
        <PrevArrow />
      </Button>

      <div
        style={{
          display: 'flex',
          width: `calc(100% - 128px)`,
        }}
        ref={divRef}
      >
        <ContentInfiniteScroll
          horizontal
          nativeMobileScroll
          innerRef={infiniteScrollRef}
        >
          {children}
        </ContentInfiniteScroll>
      </div>

      <Button onClick={() => handleScroll('next')}>
        <RightArrow />
      </Button>
    </Container>
  );
};

export { Carrousel };
