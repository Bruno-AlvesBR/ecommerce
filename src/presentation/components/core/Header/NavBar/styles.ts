import { styled, Theme } from '@mui/material';
import Box from '@mui/material/Box';
import { Link } from '@/presentation/components/ui/Link';

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
  scrollSnapType: 'x mandatory',

  '&::-webkit-scrollbar': { display: 'none' },
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
    fontSize: '1rem',
    fontWeight: 600,
    background: isSelected && theme?.palette?.background?.paper,
    transition: '.3s all ease',
    textTransform: 'uppercase',
    borderRadius: '4px 4px 0 0',
    scrollSnapAlign: 'start',

    '&:hover': {
      background: theme?.palette?.background?.paper,
      color: theme?.palette?.common?.white,
    },
  }),
);
