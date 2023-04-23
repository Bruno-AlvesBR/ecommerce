import { ProfileInitial } from '@/presentation/components/pages/profile/initial';
import { ProfileMenu } from '@/presentation/components/core/ProfileMenu';
import { MaxContainer } from '@/presentation/components/ui/Container';

interface IProfilePresentation {}

const ProfilePresentation: React.FC<IProfilePresentation> = ({}) => (
  <MaxContainer>
    <div className="flex flex-row w-full gap-8 sm:flex-col">
      <ProfileMenu />

      <ProfileInitial />
    </div>
  </MaxContainer>
);

export { ProfilePresentation };
