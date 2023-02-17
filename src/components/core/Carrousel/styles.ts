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

  '& > svg': {
    color: theme?.palette?.primary?.dark,
    transition: '.15s all ease',
  },

  '&:hover > svg': {
    color: theme?.palette?.background?.paper,
  },
}));

export const ContentInfiniteScroll = styled(InfiniteScrollUI)(() => ({
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  gap: 16,
  position: 'relative',
  width: '100%',
}));
