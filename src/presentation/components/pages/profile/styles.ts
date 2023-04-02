import ButtonUI from '@mui/material/Button';

import { styled } from '@/presentation/styles/index';

export const Container = styled('div', {
  width: '100%',
  backgroundColor: '$white1000',
  height: 'fit-content',
  padding: '$6',
  gap: '$4',
  display: 'flex',
  flexDirection: 'column',
});

export const ContentHeader = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  gap: '$4',
});

export const ContentInfos = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
});

export const Title = styled('h1', {
  fontSize: '$7',
  fontWeight: 'semibold',

  '@sm': { fontSize: '$4' },
});

export const Button = styled(ButtonUI, {
  backgroundColor: '$red800',
  color: '$white1000',
  transition: '.3s all ease',
  width: '100%',

  '&:hover, &:focus': {
    backgroundColor: '$red800',
    filter: 'brightness(0.8)',
  },
});
