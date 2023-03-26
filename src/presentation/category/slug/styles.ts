import { styled } from '@/styles/index';
import { MaxContainer } from '@/components/ui/Container';

export const Container = styled(MaxContainer, {
  backgroundColor: '$white1000',
  borderRadius: 6,
});

export const Content = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'top',
});

export const ContentProductDescription = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
  paddingLeft: '$8',
});
