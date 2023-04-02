import { Banner } from '@/presentation/components/pages/home/Banner';
import Promotions from '@/presentation/components/pages/home/Promotions';
import BestSellers from '@/presentation/components/pages/home/Releases';
import { MaxContainer } from '@/presentation/components/ui/Container';
import { IHome } from '@/domain/home/entities';

import { Content } from './styles';

const HomePresentation: React.FC<IHome> = ({
  banners,
  releases,
  promotions,
}) => (
  <MaxContainer>
    {banners?.length > 0 && <Banner banners={banners} />}

    <Content>
      {releases?.length > 0 && <BestSellers bestSellers={releases} />}

      {promotions?.length > 0 && (
        <Promotions promotions={promotions} />
      )}
    </Content>
  </MaxContainer>
);

export default HomePresentation;
