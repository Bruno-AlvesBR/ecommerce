import { useRouter } from 'next/router';

import { Link } from '@/presentation/components/ui/Link';

const Logo: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <Link
      href="/"
      className="sm:text-6 text-8 text-blue700 uppercase font-bold underline w-fit"
      noDecoration={!!pathname.split('/')[1]}
    >
      Dunked
    </Link>
  );
};

export default Logo;
