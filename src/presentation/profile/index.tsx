import { useCallback } from 'react';
import { useRouter } from 'next/router';

import { ProfileConfigs } from '@/components/pages/profile/configs';
import { ProfileInitial } from '@/components/pages/profile/initial';
import { ProfileMenu } from '@/components/core/ProfileMenu';
import { MaxContainer } from '@/components/ui/Container';

import { Content } from './styles';

interface IProfilePresentation {}

const ProfilePresentation: React.FC<IProfilePresentation> = ({}) => {
  const { query } = useRouter();
  const { view } = query;

  const ProfileView = useCallback((): JSX.Element => {
    const viewList = {
      inicio: <ProfileInitial />,
      configuracoes: <ProfileConfigs />,
    };

    return viewList[String(view)];
  }, [view]);

  return (
    <MaxContainer>
      <Content>
        <ProfileMenu />

        <ProfileView />
      </Content>
    </MaxContainer>
  );
};

export { ProfilePresentation };
