import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import ButtonUI from '@mui/material/Button';
import InfiniteScrollUI from 'react-indiana-drag-scroll';

export const Container = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  position: 'relative',
}));

export const Button = styled(ButtonUI)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',

  '& > svg': {
    color: theme?.palette?.primary?.dark,
    transition: '.15s all ease',
  },

  '&:hover > svg': {
    color: theme?.palette?.background?.paper,
  },

  [theme?.breakpoints?.down('sm')]: { minWidth: 0 },
}));

export const ContentInfiniteScroll = styled(InfiniteScrollUI)(() => ({
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  gap: '1rem',
  position: 'relative',
  width: '100%',
}));

export const Content = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: 'calc(100% - 128px)',

  [theme?.breakpoints?.down('sm')]: { width: 'calc(100% - 80px)' },
}));
