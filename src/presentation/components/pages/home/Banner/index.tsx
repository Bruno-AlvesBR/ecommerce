import { memo } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

SwiperCore.use([Autoplay]);

import { IBanner } from '@/domain/banner/entities';

interface IHomeBanner {
  banners: Array<IBanner>;
}

const HomeBanner: React.FC<IHomeBanner> = ({ banners }) => (
  <div className="absolute top-0 w-full max-w-[1440px] -z-[1]">
    <Swiper
      slidesPerView={1}
      centeredSlides
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
        stopOnLastSlide: false,
        pauseOnMouseEnter: true,
      }}
      loop
    >
      {banners?.map(banner => (
        <SwiperSlide
          key={banner?.slug}
          className="w-full h-full aspect-[16/9]"
        >
          <Image
            src={String(banner.imageUrl)}
            alt={banner.altText}
            placeholder="blur"
            blurDataURL={banner.imageUrl}
            priority
            layout="fill"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

const Banner = memo(HomeBanner);
export { Banner };
