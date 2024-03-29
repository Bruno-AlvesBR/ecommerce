import { memo, useState } from 'react';
import Image from 'next/image';

import { Link } from '@/presentation/components/ui/Link';
import { IProduct } from '@/domain/api/product/entities';
import CardSkeleton from './Skeleton';
import { PromotionFlag } from '../PromotionFlag';

import {
  Title,
  ContentPrice,
  Price,
  Content,
  ContentAlternativeImages,
  AltImage,
} from './styles';

const DefaultCard: React.FC<IProduct> = ({
  id,
  category,
  title,
  slug,
  price,
  images,
  installment,
  newPriceDiscount,
  pricePerMonth,
  discountPercentage,
}) => {
  const [mainImage, setMainImage] = useState(
    images?.length > 0 ? images[0] : '',
  );

  if (!id) return <CardSkeleton />;

  return (
    <div
      id="card"
      className="sm:min-w-[260px] sm:max-w-[260px] sm:px-4 sm:pb-4 border-[0.5px] border-black1000 pt-2 px-8 pb-8 relative flex flex-col justify-between snap-start bg-white1000 rounded-2 min-w-[300px] max-w-[300px] min-h-[360px] max-h-[360px]"
    >
      {discountPercentage && (
        <PromotionFlag discountPercentage={discountPercentage} />
      )}
      <Content>
        {images?.length > 0 && (
          <Image
            src={mainImage}
            alt=""
            width={135}
            height={135}
            blurDataURL={images[0]}
            placeholder="blur"
          />
        )}

        <Link
          href={`/categoria/${category?.slug}/${slug}`}
          noDecoration
        >
          <Title>{title}</Title>
        </Link>

        <ContentPrice>
          <span>
            <Price
              style={{
                textDecorationLine:
                  newPriceDiscount && 'line-through',
              }}
            >
              {price}
            </Price>

            {newPriceDiscount && (
              <Price hasPromotion={!!newPriceDiscount}>
                {newPriceDiscount} no PIX
              </Price>
            )}
          </span>

          {pricePerMonth && (
            <Price>
              ou x{installment} de {pricePerMonth}
            </Price>
          )}
        </ContentPrice>
      </Content>

      {images?.length > 0 && (
        <ContentAlternativeImages>
          {images.slice(0, 3).map((image, index: number) => (
            <AltImage key={index}>
              <Image
                onClick={() => setMainImage(image)}
                src={image}
                alt=""
                height={60}
                width={60}
                blurDataURL={image}
                placeholder="blur"
              />
            </AltImage>
          ))}
        </ContentAlternativeImages>
      )}
    </div>
  );
};

const Card = memo(DefaultCard);
export { Card };
