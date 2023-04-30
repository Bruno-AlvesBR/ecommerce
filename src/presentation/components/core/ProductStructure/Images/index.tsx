import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';

import { Carrousel } from '../../Carrousel';

interface IIMageStructure {
  images: Array<string>;
}

const ImagesStructure: React.FC<IIMageStructure> = ({ images }) => {
  const [mainUrl, setMainUrl] = useState('');

  useEffect(() => {
    if (images?.length > 0) setMainUrl(images[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const treatedImage = useMemo(
    (): JSX.Element => (
      <ReactImageMagnify
        smallImage={{
          src: mainUrl,
          alt: '',
          isFluidWidth: true,
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
    <div className="relative flex flex-col items-top w-full max-w-[40vw] sm:max-w-full">
      <div className="relative w-full h-full aspect-[16/9]">
        {treatedImage}
      </div>

      <Carrousel itemId="card-image" isShowHeader>
        {images?.map((image, index: number) => (
          <div
            className={`snap-start transition-all ease-in delay-[50] cursor-pointer hover:brightness-75 bg-white1000 rounded-4 aspect-[16/9] min-w-[100px] min-h-[100px] max-w-[100px] max-h-[100px] relative ${
              mainUrl === image &&
              'border-[1px] border-black1000 rounded-2'
            }`}
            key={index}
            onClick={() => setMainUrl(image)}
            id="card-image"
          >
            <Image
              key={image}
              src={image}
              placeholder="blur"
              blurDataURL={image}
              alt=""
              layout="fill"
            />
          </div>
        ))}
      </Carrousel>
    </div>
  );
};

export { ImagesStructure };
