import { IProduct } from '@/domain/api/product/entities';
import { Card } from '@/presentation/components/core/Card';
import { Filter } from '@/presentation/components/core/Filter';

interface IOffersPresentation {
  offers: Array<IProduct>;
}

const OffersPresentation: React.FC<IOffersPresentation> = ({
  offers,
}) => (
  <div className="sm:mx-4 sm:flex-col my-4 w-full gap-4 flex flex-row">
    <Filter />

    <div className="sm:justify-center flex flex-row flex-wrap gap-4">
      {offers?.map(product => (
        <Card key={product?.id} {...product} />
      ))}
    </div>
  </div>
);

export { OffersPresentation };
