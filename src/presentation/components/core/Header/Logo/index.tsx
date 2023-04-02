import { useRouter } from 'next/router';
import { ButtonLogo } from './styles';

const Logo: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <ButtonLogo href="/" noDecoration={!!pathname.split('/')[1]}>
      Dunked
    </ButtonLogo>
  );
};

export default Logo;
