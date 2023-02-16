import { useRouter } from 'next/router';

import { listNav } from './List';

import { Container, Item } from './styles';

const NavBar: React.FC = () => {
  const { pathname } = useRouter();

  const path = (id: string) => `/categoria/${id}`;

  return (
    <Container>
      {listNav?.map(item => (
        <Item
          key={item?.id}
          passHref
          href={path(item?.id)}
          isSelected={pathname === path(item?.id)}
        >
          {item?.title}
        </Item>
      ))}
    </Container>
  );
};

export default NavBar;
