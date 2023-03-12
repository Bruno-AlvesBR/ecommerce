import Typography from '@mui/material/Typography';

import { Container } from './styles';

interface IPromotionFlag {
  discountPercentage: number;
}

const PromotionFlag: React.FC<IPromotionFlag> = ({
  discountPercentage,
}) => (
  <Container>
    <Typography>-{discountPercentage}%</Typography>
  </Container>
);

export { PromotionFlag };
