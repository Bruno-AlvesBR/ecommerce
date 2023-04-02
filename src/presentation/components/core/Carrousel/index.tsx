import PrevArrow from '@mui/icons-material/ArrowBackIos';
import RightArrow from '@mui/icons-material/ArrowForwardIos';
import useMediaQuery from '@mui/material/useMediaQuery';
import { PropsWithChildren, useRef } from 'react';

import theme from '@/presentation/styles/theme';
import {
  Button,
  Container,
  ContentInfiniteScroll,
  Content,
} from './styles';

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
    const valueToScroll = isMobile ? 200 : contentSize;

    const { scrollLeft } = infiniteScrollRef.current;

    const valueScroll =
      event === 'next' ? valueToScroll : -valueToScroll;

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

      <Content ref={divRef}>
        <ContentInfiniteScroll
          horizontal
          nativeMobileScroll
          innerRef={infiniteScrollRef}
        >
          {children}
        </ContentInfiniteScroll>
      </Content>

      <Button onClick={() => handleScroll('next')}>
        <RightArrow />
      </Button>
    </Container>
  );
};

export { Carrousel };
