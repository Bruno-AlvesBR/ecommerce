import { styled, Theme } from '@mui/material';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

export const Container = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'left',
  width: '100%',
  maxWidth: 1280,
  margin: '0px auto',
  padding: 0,
  overflowX: 'auto',
  position: 'relative',

  '&::-webkit-scrollbar': {
    display: 'none',
  },
}));

interface IContentProps {
  isSelected?: boolean;
  theme?: Theme;
}

export const Item = styled(Link)<IContentProps>(
  ({ isSelected, theme }) => ({
    padding: '0px 10px',
    textDecoration: 'none',
    color: !isSelected
      ? theme?.palette?.primary?.main
      : theme?.palette?.common?.white,
    fontSize: 16,
    fontWeight: 600,
    background: isSelected && theme?.palette?.background?.paper,
    transition: '.3s all ease',
    textTransform: 'uppercase',

    '&:hover': {
      background: theme?.palette?.background?.paper,
      color: theme?.palette?.common?.white,
    },
  }),
);
