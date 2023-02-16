import { IBestSellersProps } from 'domain/home/entities/IBestSellers';
import CardSkeleton from './Skeleton';
import { Container, Title } from './styles';

const DefaultCard: React.FC<IBestSellersProps> = ({
  id,
  title,
  slug,
  imgs,
}) => <CardSkeleton />;

export default DefaultCard;
