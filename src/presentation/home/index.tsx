import { Banner } from '@/components/pages/home/Banner';
import BestSellers from '@/components/pages/home/Releases';
import { MaxContainer } from '@/components/ui/Container';
import { IHome } from '@/domain/home/entities';
import { Content } from './styles';

const HomePresentation: React.FC<IHome> = ({ banners, releases }) => (
  <MaxContainer>
    {banners && <Banner banners={banners} />}

    <Content>
      {releases && <BestSellers bestSellers={releases} />}
    </Content>
  </MaxContainer>
);

export default HomePresentation;
