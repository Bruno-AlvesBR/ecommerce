import { useAuth } from '@/hooks/authentication';

import { Container, ContentHeader, Button, Title } from '../styles';

interface IProfileInitial {}

const ProfileInitial: React.FC<IProfileInitial> = ({}) => {
  const { handleLogout, user } = useAuth();

  return (
    <Container data-testid="profile-initial-menu">
      <ContentHeader>
        {user?.name && (
          <Title data-testid="heading-user-name">
            Seja bem-indo (a), {user.name?.firstName}.
          </Title>
        )}
      </ContentHeader>

      <Button data-testid="exit-button" onClick={handleLogout}>
        SAIR
      </Button>
    </Container>
  );
};

export { ProfileInitial };
