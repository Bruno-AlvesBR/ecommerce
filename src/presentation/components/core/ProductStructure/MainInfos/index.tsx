import { Container } from './styles';

interface IMainInfos {
  title: string;
  brand: string;
  price: string;
  newPriceDiscount?: string;
  isPromotion?: boolean;
  pricePerMonth?: string;
  rating: number;
  installment?: number;
}

const MainInfos: React.FC<IMainInfos> = ({
  title,
  brand,
  price,
  newPriceDiscount,
  isPromotion,
  pricePerMonth,
  rating,
  installment,
}) => (
  <Container>
    <h1>{title}</h1>
    <p>
      <strong>marca:</strong> {brand}
    </p>

    <p>
      <strong>avaliações:</strong> {rating}
    </p>

    <br />

    <p
      style={{
        textDecorationLine: newPriceDiscount && 'line-through',
      }}
    >
      {price}
    </p>

    <span style={{ display: 'flex', gap: 8 }}>
      <strong>preço:</strong>{' '}
      {newPriceDiscount && <p> {newPriceDiscount} no PIX</p>}
    </span>

    {pricePerMonth && (
      <p>
        <strong>parcelas: </strong> x{installment} de {pricePerMonth}
      </p>
    )}
  </Container>
);

export { MainInfos };
