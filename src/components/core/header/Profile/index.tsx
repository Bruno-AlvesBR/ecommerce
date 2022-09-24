import Link from 'next/link';
import Avatar from '@mui/material/Avatar';

import { Container } from './styles';

interface IProfileProps {
  image?: string;
}

const Profile: React.FC<IProfileProps> = ({ image }) => (
  <Link href="/profile" passHref>
    <Container>
      <Avatar variant="square" src={image} />
    </Container>
  </Link>
);

export default Profile;
