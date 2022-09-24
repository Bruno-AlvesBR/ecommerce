import IconLogo from '@/assets/icons/logo';
import Link from 'next/link';

import { ButtonLogo } from './styles';

interface ILogoProps {
  width?: string | number;
  height?: string | number;
}

const Logo: React.FC<ILogoProps> = ({ width, height }) => (
  <Link href="/" passHref>
    <ButtonLogo>
      <IconLogo width={width} height={height} />
    </ButtonLogo>
  </Link>
);

export default Logo;
