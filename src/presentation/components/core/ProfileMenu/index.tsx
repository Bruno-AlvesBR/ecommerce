import { useRouter } from 'next/router';

import { Link } from '@/presentation/components/ui/Link';
import { menuList } from './list';

interface IProfileMenu {}

const ProfileMenu: React.FC<IProfileMenu> = ({}) => {
  const { asPath } = useRouter();

  return (
    <div
      className="flex flex-col relative w-full max-w-[300px] bg-white1000 h-fit items-center justify-center gap-4 px-4 py-8 sm:max-w-full"
      data-testid="profile-menu"
    >
      {menuList.map(item => (
        <Link
          key={item.slug}
          data-testid={`button-menu-${item.slug}`}
          href={`/perfil/${item.slug}`}
          className={`text-black1000 ${
            asPath.includes(item.slug) ? 'underline' : 'no-underline'
          }`}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export { ProfileMenu };
