import { useAuth } from '@/hooks/authentication';

import { Container, ContentHeader, Button, Title } from '../styles';

interface IProfileInitial {}

const ProfileInitial: React.FC<IProfileInitial> = ({}) => {
  const { handleLogout, user } = useAuth();

  return (
    <Container>
      <ContentHeader>
        {user.name && (
          <Title>Seja bem-indo (a), {user.name?.firstName}.</Title>
        )}
      </ContentHeader>

      <Button onClick={handleLogout}>SAIR</Button>
    </Container>
  );
};

export { ProfileInitial };
