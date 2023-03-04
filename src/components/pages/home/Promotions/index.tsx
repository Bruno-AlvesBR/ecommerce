import { IProduct } from '@/domain/api/product/entities';
import { Card } from '@/components/core/Card';
import Section from '@/components/core/Section';

interface IPromotionsComponent {
  promotions: IProduct[];
}

const Promotions: React.FC<IPromotionsComponent> = ({
  promotions,
}) => (
  <Section title="Ofertas" url="/categoria/ofertas">
    {promotions?.map(content => (
      <Card key={content?.id} {...content} />
    ))}
  </Section>
);

export default Promotions;
