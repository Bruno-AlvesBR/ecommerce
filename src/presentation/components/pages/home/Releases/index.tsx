import { IProduct } from '@/domain/api/product/entities';
import { Card } from '@/presentation/components/core/Card';
import { Section } from '@/presentation/components/core/Section';

interface IBestSellersComponentProps {
  bestSellers: IProduct[];
}

const BestSellers: React.FC<IBestSellersComponentProps> = ({
  bestSellers,
}) => (
  <Section title="Lançamentos" url="/categoria/lancamentos">
    {bestSellers.map(content => (
      <Card key={content?.id} {...content} />
    ))}
  </Section>
);

export { BestSellers };
