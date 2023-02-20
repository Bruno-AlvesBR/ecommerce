import { memo, useMemo, useState } from 'react';
import Image from 'next/image';
import ReactImageMagnify from 'react-image-magnify';

import { Link } from '@/components/ui/Link';
import { IProduct } from '@/domain/api/product/entities';
import { handleFormatPrice } from '@/utils/format/price';
import CardSkeleton from './Skeleton';

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
    imgs,
    installment,
    newPriceDiscount,
    pricePerMonth,
  } = props;

  const [mainImage, setMainImage] = useState(imgs[0]?.url);

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
      <Content>
        {imgs && <ContentImage>{treatedImage}</ContentImage>}

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

      {imgs && (
        <ContentAlternativeImages>
          {imgs?.slice(1, 4)?.map((image, index: number) => (
            <AltImage key={index}>
              <Image
                onClick={() => setMainImage(image?.url)}
                src={image?.url}
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
