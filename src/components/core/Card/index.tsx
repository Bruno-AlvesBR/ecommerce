import { memo, useMemo, useState } from 'react';
import Image from 'next/image';
import ReactImageMagnify from 'react-image-magnify';

import { Link } from '@/components/ui/Link';
import { IProduct } from '@/domain/api/product/entities';
import CardSkeleton from './Skeleton';
import { PromotionFlag } from '../PromotionFlag';

import {
  Container,
  Title,
  ContentPrice,
  Price,
  Content,
  ContentImage,
  ContentAlternativeImages,
  AltImage,
} from './styles';

const DefaultCard: React.FC<IProduct> = props => {
  const {
    category,
    title,
    slug,
    price,
    images,
    installment,
    newPriceDiscount,
    pricePerMonth,
    discountPercentage,
  } = props;

  const [mainImage, setMainImage] = useState(
    images?.length > 0 && images[0],
  );

  const treatedImage = useMemo(
    (): JSX.Element => (
      <ReactImageMagnify
        smallImage={{
          src: mainImage,
          alt: '',
          width: 135,
          height: 135,
          isFluidWidth: false,
        }}
        largeImage={{
          src: mainImage,
          alt: '',
          width: 500,
          height: 500,
        }}
      />
    ),
    [mainImage],
  );

  return props ? (
    <Container>
      {discountPercentage && (
        <PromotionFlag discountPercentage={discountPercentage} />
      )}
      <Content>
        {images?.length > 0 && (
          <ContentImage>{treatedImage}</ContentImage>
        )}

        <Link
          href={`/categoria/${category?.slug}/${slug}`}
          passHref
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
          {images?.map((image, index: number) => (
            <AltImage key={index}>
              <Image
                onClick={() => setMainImage(image)}
                src={image}
                alt=""
                height={60}
                width={60}
              />
            </AltImage>
          ))}
        </ContentAlternativeImages>
      )}
    </Container>
  ) : (
    <CardSkeleton />
  );
};

const Card = memo(DefaultCard);
export { Card };
