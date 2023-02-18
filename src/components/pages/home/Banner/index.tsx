import { memo } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination]);

import { IBanner } from '@/domain/banner/entities';

import { Container } from './styles';

interface IHomeBanner {
  banners: Array<IBanner>;
}

const HomeBanner: React.FC<IHomeBanner> = ({ banners }) => (
  <Container>
    <Swiper
      slidesPerView={1}
      centeredSlides
      autoplay={{
        delay: 5500,
        disableOnInteraction: false,
        stopOnLastSlide: false,
        pauseOnMouseEnter: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      loop
    >
      {banners?.map(banner => (
        <SwiperSlide key={banner?.slug}>
          <Image
            src={banner?.imageUrl}
            alt={banner?.altText}
            width={2000}
            height={800}
            objectFit="contain"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </Container>
);

const Banner = memo(HomeBanner);
export { Banner };
