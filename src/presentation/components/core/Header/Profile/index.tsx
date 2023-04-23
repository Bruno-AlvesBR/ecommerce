import { Link } from '@/presentation/components/ui/Link';
import Avatar from '@mui/material/Avatar';

interface IProfileProps {
  image: string;
}

const Profile: React.FC<Partial<IProfileProps>> = ({ image }) => (
  <Link
    href="/perfil?view=inicio"
    noDecoration
    className="sm:w-8 sm:max-w-8 sm:h-8 sm:max-h-8 flex items-center justify-center relative p-0 w-10 h-10 max-w-10 max-h-10 rounded-2 bg-red800"
  >
    <Avatar
      variant="square"
      src={image}
      style={{ backgroundColor: 'transparent' }}
    />
  </Link>
);

export { Profile };
