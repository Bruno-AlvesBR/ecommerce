import { styled } from '@/styles/index';

export const Container = styled('button', {
  color: '$white1000',
  backgroundColor: '$blue700',
  transition: '.3s all ease',
  cursor: 'pointer',
  border: 'none',
  outline: 'none',
  padding: '$2 $4',
  borderRadius: 4,
  fontSize: '$4',
  fontWeight: 600,
  width: '100%',
  maxWidth: 165,
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 'fit-content',

  '&:hover, &:focus': { filter: 'brightness(0.9)' },

  '&:after': {
    content: '""',
    backgroundColor: '$white300',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    paddingTop: '500%',
    paddingLeft: '500%',
    left: 0,
    bottom: 0,
    opacity: 0,
    transition: 'all 1s',
  },

  '&:active:after': {
    padding: 0,
    margin: 0,
    opacity: 1,
    transition: '0s',
  },

  defaultVariants: {
    fullWidth: false,
  },
  variants: {
    fullWidth: {
      true: {
        maxWidth: '100%',
      },
    },
  },
});
