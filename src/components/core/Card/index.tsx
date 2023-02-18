import { memo, useMemo } from 'react';
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
    isPromotion,
    installment,
    discountPercentage,
  } = props;

  const treatedImage = useMemo(
    (): JSX.Element => (
      <ReactImageMagnify
        smallImage={{
          src: imgs[0]?.url,
          alt: '',
          width: 135,
          height: 135,
          isFluidWidth: false,
        }}
        largeImage={{
          src: imgs[0]?.url,
          alt: '',
          width: 500,
          height: 500,
        }}
      />
    ),
    [imgs],
  );

  const treatedPrices = useMemo(
    () =>
      handleFormatPrice({
        price,
        installment,
        isPromotion,
        discountPercentage,
      }),
    [discountPercentage, installment, isPromotion, price],
  );

  return String(props)?.length > 0 ? (
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

        {treatedPrices?.price && (
          <ContentPrice>
            <span>
              <Price
                style={{
                  textDecorationLine:
                    treatedPrices?.newPriceDiscount && 'line-through',
                }}
              >
                R$ {treatedPrices?.price}
              </Price>

              {treatedPrices?.newPriceDiscount && (
                <Price
                  hasPromotion={!!treatedPrices?.newPriceDiscount}
                >
                  R$ {treatedPrices?.newPriceDiscount} no PIX
                </Price>
              )}
            </span>

            {treatedPrices?.priceInstallment && (
              <Price>
                ou x{installment} de R$
                {treatedPrices?.priceInstallment}
              </Price>
            )}
          </ContentPrice>
        )}
      </Content>

      {imgs && (
        <ContentAlternativeImages>
          {imgs?.slice(1, 4)?.map((image, index: number) => (
            <AltImage key={index}>
              <Image src={image?.url} alt="" height={60} width={60} />
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
