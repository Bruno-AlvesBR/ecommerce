import { useRouter } from 'next/router';

import { menuList } from './list';

import { Container, Button } from './styles';

interface IProfileMenu {}

const ProfileMenu: React.FC<IProfileMenu> = ({}) => {
  const { asPath } = useRouter();

  return (
    <Container>
      {menuList.map(item => (
        <Button
          key={item.slug}
          href={`?view=${item.slug}`}
          isSelected={asPath.includes(item.slug)}
        >
          {item.title}
        </Button>
      ))}
    </Container>
  );
};

export { ProfileMenu };
