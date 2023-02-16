import { Link } from '@/components/ui/Link';

import { ButtonLogo } from './styles';

const Logo: React.FC = () => (
  <Link href="/" passHref noDecoration>
    <ButtonLogo>Dunked</ButtonLogo>
  </Link>
);

export default Logo;
