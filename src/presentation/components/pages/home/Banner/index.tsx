import { memo } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';

SwiperCore.use([Autoplay, Pagination]);

import { IBanner } from '@/domain/banner/entities';

interface IHomeBanner {
  banners: Array<IBanner>;
}

const HomeBanner: React.FC<IHomeBanner> = ({ banners }) => (
  <div className="relative w-full h-full aspect-[16/5] sm:aspect-[16/8] overflow-hidden rounded-md sm:rounded-t-none">
    <Swiper
      slidesPerView={1}
      centeredSlides
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
        stopOnLastSlide: false,
        pauseOnMouseEnter: true,
      }}
      pagination={{ clickable: true }}
      loop
    >
      {banners?.map(banner => (
        <SwiperSlide
          key={banner?.slug}
          className="w-full h-full aspect-[16/5] sm:aspect-[16/8]"
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
