import { Link } from '@/components/ui/Link';
import Avatar from '@mui/material/Avatar';

import { Container } from './styles';

interface IProfileProps {
  image?: string;
}

const Profile: React.FC<IProfileProps> = ({ image }) => (
  <Link href="/perfil?view=inicio" passHref noDecoration>
    <Container>
      <Avatar variant="square" src={image} />
    </Container>
  </Link>
);

export default Profile;
