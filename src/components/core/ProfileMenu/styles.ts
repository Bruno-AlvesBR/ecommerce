import { styled } from '@/styles/index';

import { Link } from '@/components/ui/Link';

export const Container = styled('div', {
  width: '100%',
  maxWidth: 300,
  backgroundColor: '$white1000',
  height: 'fit-content',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$4',
  padding: '$8 $4',

  '@sm': { maxWidth: '100%' },
});

export const Button = styled(Link, {
  color: '$black1000',
  textDecoration: 'none',
  fontSize: '$4',
  outline: 'none',

  '&:hover, &:focus': { textDecoration: 'underline' },

  variants: {
    isSelected: {
      true: {
        textDecoration: 'underline',
        fontWeight: 'bold',
      },
    },
  },
});
