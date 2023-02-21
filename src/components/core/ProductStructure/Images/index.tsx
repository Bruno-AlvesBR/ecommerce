import Image from 'next/image';
import { useMemo, useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';

import { Carrousel } from '../../Carrousel';

import {
  Container,
  ContentMainImage,
  ContentAltImage,
} from './styles';

interface IIMageStructure {
  images: Array<{ url?: string }>;
}

const ImagesStructure: React.FC<IIMageStructure> = ({ images }) => {
  const [mainUrl, setMainUrl] = useState(images && images[0]?.url);

  const treatedImage = useMemo(
    (): JSX.Element => (
      <ReactImageMagnify
        smallImage={{
          src: mainUrl,
          alt: '',
          isFluidWidth: false,
          width: 500,
          height: 500,
        }}
        largeImage={{
          src: mainUrl,
          alt: '',
          width: 1000,
          height: 1000,
        }}
      />
    ),
    [mainUrl],
  );

  return (
    <Container>
      <ContentMainImage>{treatedImage}</ContentMainImage>

      <Carrousel contentSize={100}>
        {images
          ?.slice(1, images?.length)
          ?.map((image, index: number) => (
            <ContentAltImage
              key={index}
              isSelected={mainUrl === image?.url}
              onClick={() => setMainUrl(image?.url)}
            >
              <Image
                key={image?.url}
                src={image?.url}
                alt=""
                width={100}
                height={100}
              />
            </ContentAltImage>
          ))}
      </Carrousel>
    </Container>
  );
};

export { ImagesStructure };
