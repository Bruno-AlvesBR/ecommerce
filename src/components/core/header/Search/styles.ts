import { styled, Theme } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const Container = styled(Box)(() => ({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  flexDirection: 'row',
  justifyContent: 'right',
}));

interface IContentProps {
  isOpenSearch?: boolean;
  theme?: Theme;
}

export const Input = styled(TextField)<IContentProps>(
  ({ isOpenSearch, theme }) => ({
    alignItems: 'left',
    justifyContent: 'left',
    transition: '.15s all ease',
    width: isOpenSearch ? 0 : '100%',
    height: '100%',

    '& .MuiInputBase-root': {
      borderRadius: !isOpenSearch && '5px 0px 0px 5px',
    },

    '& input': {
      transition: '.1s all ease',
      width: isOpenSearch ? 0 : '100%',
      padding: isOpenSearch ? '8.5px 0' : '8.5px 12px',
    },
  }),
);

export const ButtonSearch = styled(Button)<IContentProps>(
  ({ isOpenSearch, theme }) => ({
    minWidth: 0,
    margin: 0,
    padding: 8,
    zIndex: 2,
    background: theme?.palette?.background?.paper,
    transition: '.3s all ease',
    color: theme?.palette?.common?.white,
    borderRadius: !isOpenSearch && '0px 5px 5px 0px',

    '&:hover': {
      filter: 'brightness(0.9)',
      background: theme?.palette?.background?.paper,
    },
  }),
);
