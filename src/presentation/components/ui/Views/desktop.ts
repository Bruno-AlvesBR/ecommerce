import { styled, Theme } from '@mui/material';
import Box from '@mui/material/Box';

interface IContentDesktop {
  fullWidth?: boolean;
  theme?: Theme;
}

export const ContentDesktop = styled(Box)<IContentDesktop>(
  ({ theme, fullWidth }) => ({
    display: 'flex',
    width: fullWidth ? '100%' : 'fit-content',

    [theme.breakpoints.down('sm')]: { display: 'none' },
  }),
);
