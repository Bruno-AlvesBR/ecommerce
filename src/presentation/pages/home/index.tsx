import { Banner } from '@/presentation/components/pages/home/Banner';
import { Promotions } from '@/presentation/components/pages/home/Promotions';
import { BestSellers } from '@/presentation/components/pages/home/Releases';
import { MaxContainer } from '@/presentation/components/ui/Container';
import { IHome } from '@/domain/home/entities';
import { Categories } from '@/presentation/components/pages/home/categories';

const HomePresentation: React.FC<IHome> = ({
  banners,
  releases,
  promotions,
  categories,
}) => (
  <MaxContainer className="my-8 gap-8 sm:my-0">
    {banners?.length > 0 && <Banner banners={banners} />}

    {releases?.length > 0 && <BestSellers bestSellers={releases} />}

    {promotions?.length > 0 && <Promotions promotions={promotions} />}

    {categories?.length > 0 && <Categories categories={categories} />}
  </MaxContainer>
);

export { HomePresentation };
