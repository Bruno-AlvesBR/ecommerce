import { Banner } from '@/components/pages/home/Banner';
import Promotions from '@/components/pages/home/Promotions';
import BestSellers from '@/components/pages/home/Releases';
import { MaxContainer } from '@/components/ui/Container';
import { IHome } from '@/domain/home/entities';
import { Content } from './styles';

const HomePresentation: React.FC<IHome> = ({
  banners,
  releases,
  promotions,
}) => (
  <MaxContainer>
    {banners && <Banner banners={banners} />}

    <Content>
      {releases && <BestSellers bestSellers={releases} />}

      {promotions && <Promotions promotions={promotions} />}
    </Content>
  </MaxContainer>
);

export default HomePresentation;
