import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ButtonUI from '@mui/material/Button';

export const Container = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  position: 'relative',
  gap: '1rem',
}));

export const Button = styled(ButtonUI)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'fit-content',
  minWidth: 'fit-content',
  padding: '0 0.5rem',

  '& > svg': {
    color: theme?.palette?.primary?.dark,
    transition: '.15s all ease',
    opacity: 1,
  },

  '&:hover > svg': {
    color: theme?.palette?.background?.paper,
  },

  '&:disabled': {
    pointerEvents: 'none',

    '& > svg': { opacity: 0.4 },
  },

  [theme.breakpoints.down('sm')]: { display: 'none' },
}));

export const ContentInfiniteScroll = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  position: 'relative',
  width: '100%',
  scrollSnapType: 'x mandatory',
  overflow: 'auto',

  '&::-webkit-scrollbar': { display: 'none' },
}));

export const Content = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
}));

export const ContentHeader = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 500,

  [theme.breakpoints.down('sm')]: { fontSize: '1rem' },
}));

export const ContentHeaderButtons = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
}));

export const HeaderButton = styled(Button)(({ theme }) => ({
  display: 'none',

  [theme.breakpoints.down('sm')]: { display: 'flex' },
}));
