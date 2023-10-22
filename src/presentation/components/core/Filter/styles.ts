import { styled, Theme } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface IContainer {
  expandedFilter: boolean;
  theme?: Theme;
}

export const Container = styled('form')<IContainer>(
  ({ expandedFilter, theme }) => ({
    width: '100%',
    maxWidth: 300,
    height: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme?.palette?.common?.white,
    padding: '0 1rem 2rem 1rem',
    gap: '1rem',
    border: `1px solid ${theme?.palette?.common?.black}`,
    borderRadius: 6,
    transition: '.3s all ease',
  }),
);

export const ContentFiltersTypes = styled(Box)<IContainer>(
  ({ theme, expandedFilter }) => ({
    width: '100%',
    gap: '1rem',
    display: 'flex',
    flexDirection: 'column',

    [theme?.breakpoints?.down('sm')]: {
      ...(!expandedFilter && {
        display: 'none',
      }),
    },
  }),
);

export const ContentHeader = styled(Box)<IContainer>(
  ({ theme, expandedFilter }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    borderBottom: `1px solid ${theme?.palette?.common?.black}`,
    padding: '1rem 0',

    [theme?.breakpoints?.down('sm')]: {
      borderBottom: 'none',
      padding: 0,
    },
  }),
);

export const ContentIcon = styled(Box)(({ theme }) => ({
  display: 'none',

  [theme?.breakpoints?.down('sm')]: { display: 'flex' },
}));

export const Content = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 'fit-content',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  '&:not(:last-of-type)': {
    paddingBottom: '1rem',
    borderBottom: `1px solid ${theme?.palette?.common?.black}`,
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontSize: '1.5rem',
}));

export const ContentTitle = styled(Typography)(() => ({
  textDecoration: 'underline',
  textAlign: 'left',
  fontSize: '1rem',
}));

export const ContentFields = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '0.25rem',
}));

export const ContentField = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '0.5rem',
}));

export const Input = styled('input')(() => ({
  width: '1rem',
  height: '1rem',
}));

export const FieldInfo = styled(Typography)(() => ({
  fontSize: '0.875rem',
}));
