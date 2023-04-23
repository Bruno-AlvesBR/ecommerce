import { MaxContainer } from '@/presentation/components/ui/Container';
import { ProfileConfigs } from '@/presentation/components/pages/profile/configs';
import { ProfileMenu } from '@/presentation/components/core/ProfileMenu';

const ProfileConfigsPresentation = () => (
  <MaxContainer>
    <div className="flex flex-row w-full gap-8 sm:flex-col">
      <ProfileMenu />

      <ProfileConfigs />
    </div>
  </MaxContainer>
);

export { ProfileConfigsPresentation };
