import Image from 'next/image';
import { useState } from 'react';

import { Carrousel } from '../../Carrousel';

interface IIMageStructure {
  images: Array<string>;
}

const ImagesStructure: React.FC<IIMageStructure> = ({ images }) => {
  const [mainUrl, setMainUrl] = useState(images[0]);

  return (
    <div className="relative flex flex-col items-top w-full max-w-[40vw] sm:max-w-full">
      <div className="sm:min-h-[300px] relative w-full min-h-[500px] aspect-[16/9]">
        <Image
          src={mainUrl}
          alt=""
          layout="fill"
          objectFit="cover"
          blurDataURL={mainUrl}
          priority
          placeholder="blur"
        />
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
              priority
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
