import { Banner } from '@/presentation/components/pages/home/Banner';
import { Promotions } from '@/presentation/components/pages/home/Promotions';
import { BestSellers } from '@/presentation/components/pages/home/Releases';
import { MaxContainer } from '@/presentation/components/ui/Container';
import { IHome } from '@/domain/home/entities';

const HomePresentation: React.FC<IHome> = ({
  banners,
  releases,
  promotions,
}) => (
  <MaxContainer>
    {banners?.length > 0 && <Banner banners={banners} />}

    <div className="relative w-full flex flex-col mt-[12.5rem] bg-white1000 p-4 rounded-2 gap-10 sm:mt-24">
      {releases?.length > 0 && <BestSellers bestSellers={releases} />}

      {promotions?.length > 0 && (
        <Promotions promotions={promotions} />
      )}
    </div>
  </MaxContainer>
);

export { HomePresentation };
