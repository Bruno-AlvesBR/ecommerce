import BestSellers from '@/components/pages/home/BestSellers';

const HomePresentation: React.FC = () => (
  <>
    <BestSellers
      bestSellers={[
        { id: 'first', title: 'first', slug: 'first' },
        { id: 'second', title: 'second', slug: 'second' },
        { id: 'third', title: 'third', slug: 'third' },
        { id: 'for', title: 'for', slug: 'for' },
      ]}
    />
  </>
);

export default HomePresentation;
