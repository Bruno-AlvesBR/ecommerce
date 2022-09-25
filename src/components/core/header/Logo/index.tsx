import IconLogo from '@/assets/icons/logo';
import Link from 'next/link';

import { ButtonLogo } from './styles';

const Logo: React.FC = () => (
  <Link href="/" passHref>
    <ButtonLogo>Dunked</ButtonLogo>
  </Link>
);

export default Logo;
