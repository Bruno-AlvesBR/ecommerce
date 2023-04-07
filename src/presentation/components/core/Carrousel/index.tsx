import PrevArrow from '@mui/icons-material/ArrowBackIos';
import RightArrow from '@mui/icons-material/ArrowForwardIos';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  PropsWithChildren,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import theme from '@/presentation/styles/theme';
import {
  Button,
  Container,
  ContentInfiniteScroll,
  Content,
  ContentHeader,
  Title,
  HeaderButton,
  ContentHeaderButtons,
} from './styles';

interface ICarrousel extends PropsWithChildren {
  title: string;
  itemId: string;
}

const Carrousel: React.FC<ICarrousel> = ({
  children,
  title,
  itemId,
}) => {
  const infiniteScrollRef = useRef<HTMLDivElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery(theme?.breakpoints?.down('sm'));

  const [currentStep, setCurrentStep] = useState<number>(0);

  const handleScroll = (event: 'next' | 'prev') => {
    if (!infiniteScrollRef && !divRef) return;

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
    <Container>
      <ContentHeader>
        <Title>{title}</Title>

        <ContentHeaderButtons>
          <HeaderButton onClick={() => handleScroll('prev')}>
            <PrevArrow />
          </HeaderButton>

          <HeaderButton onClick={() => handleScroll('next')}>
            <RightArrow />
          </HeaderButton>
        </ContentHeaderButtons>
      </ContentHeader>

      <Content ref={divRef}>
        <Button onClick={() => handleScroll('prev')}>
          <PrevArrow />
        </Button>

        <ContentInfiniteScroll ref={infiniteScrollRef}>
          {children}
        </ContentInfiniteScroll>

        <Button onClick={() => handleScroll('next')}>
          <RightArrow />
        </Button>
      </Content>
    </Container>
  );
};

export { Carrousel };
