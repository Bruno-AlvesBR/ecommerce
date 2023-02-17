import { Banner } from '@/components/pages/home/Banner';
import BestSellers from '@/components/pages/home/BestSellers';
import { MaxContainer } from '@/components/ui/Container';
import { IHome } from '@/domain/home/entities';

const HomePresentation: React.FC<IHome> = ({
  banners,
  bestSellers,
}) => (
  <MaxContainer>
    <div
      style={{
        position: 'absolute',
        zIndex: -1,
        top: 88.8,
      }}
    >
      {banners && <Banner banners={banners} />}
    </div>

    <div
      style={{
        width: '100%',
        position: 'relative',
        zIndex: 1,
        marginTop: 160,
      }}
    >
      {bestSellers && <BestSellers bestSellers={bestSellers} />}
    </div>
  </MaxContainer>
);

export default HomePresentation;
