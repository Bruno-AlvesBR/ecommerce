import { ImagesStructure } from '@/components/core/ProductStructure/Images';
import { MainInfos } from '@/components/core/ProductStructure/MainInfos';
import { IProduct } from '@/domain/api/product/entities';

import { Container, Content } from './styles';

interface ITennisPresentation {
  tennis: IProduct;
}

const TennisPresentation: React.FC<ITennisPresentation> = ({
  tennis,
}) => (
  <Container style={{ padding: '2rem' }}>
    <Content>
      <ImagesStructure images={tennis?.images} />

      <MainInfos {...tennis} />
    </Content>
  </Container>
);

export { TennisPresentation };
