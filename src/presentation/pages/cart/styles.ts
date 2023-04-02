import { MaxContainer } from '@/presentation/components/ui/Container';
import { styled } from '@/presentation/styles/index';

export const Container = styled(MaxContainer, {
  display: 'flex',
  flexDirection: 'column',
  margin: 40,
});

export const Content = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  gap: '$4',
});
