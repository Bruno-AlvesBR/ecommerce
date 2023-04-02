import { styled } from '@/presentation/styles/index';

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  gap: '$8',

  '@sm': { flexDirection: 'column' },
});
