import { Link } from '@/presentation/components/ui/Link';
import { styled } from '@/presentation/styles/index';

export const Container = styled('div', {
  width: '100%',
  height: 'fit-content',
  backgroundColor: '$white1000',
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
  padding: '$4',
  borderRadius: 4,
});

export const Card = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$2',
  paddingBottom: '$2',
  width: '100%',

  '&:not(:last-of-type)': {
    borderBottom: '1px solid $black1000',
  },
});

export const Title = styled(Link, {
  fontSize: '$4',
  fontWeight: 500,
  display: '-webkit-box',
  WebkitLineClamp: '1',
  WebkitBoxOrient: 'vertical',
  textOverflow: 'ellipsis',
  maxWidth: '50%',
  overflow: 'hidden',
  textDecoration: 'none',
  color: '$black1000',
  outline: 'none',
  width: '100%',

  '&:hover, &:focus': { textDecoration: 'underline' },
});

export const Price = styled('p', {
  fontSize: '$4',
  fontWeight: 400,
});

export const DeleteButton = styled('button', {
  outline: 'none',
  backgroundColor: 'transparent',
  border: 'none',
  width: 'fit-content',
  height: 'fit-content',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 'auto',
  transition: '.3s all ease',

  '&:hover, &:focus': { color: '$red800' },
});
