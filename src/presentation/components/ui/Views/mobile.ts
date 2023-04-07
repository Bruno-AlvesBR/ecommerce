import { Theme, styled } from '@mui/material';
import Box from '@mui/material/Box';

interface IContentMobile {
  fullWidth?: boolean;
  theme?: Theme;
}

export const ContentMobile = styled(Box)<IContentMobile>(
  ({ theme, fullWidth }) => ({
    display: 'flex',
    width: fullWidth ? '100%' : 'fit-content',

    [theme.breakpoints.up('sm')]: { display: 'none' },
  }),
);
