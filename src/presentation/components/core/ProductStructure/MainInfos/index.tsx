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
  <div className="flex flex-col gap-6">
    <h1 className="sm:text-5 sm:font-semibold text-6 font-semibold">
      {title}
    </h1>

    <div className="flex flex-col items-start">
      <p>
        <strong>marca:</strong> {brand}
      </p>
      <p>
        <strong>avaliações:</strong> {rating}
      </p>
    </div>

    <div>
      <p
        className={`text-4 ${
          newPriceDiscount && 'line-through text-red800'
        }`}
      >
        {price}
      </p>

      <div className="flex flex-row gap-1">
        <strong>preço:</strong>
        {newPriceDiscount && <p> {newPriceDiscount} no PIX</p>}
      </div>

      {pricePerMonth && (
        <p>
          <strong>parcelamento:</strong> x{installment} de{' '}
          {pricePerMonth}
        </p>
      )}
    </div>
  </div>
);

export { MainInfos };
