import { useRouter } from 'next/router';

import { listNav } from './List';

import { Container, Item } from './styles';

const NavBar: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <Container>
      {listNav?.map(item => (
        <Item
          key={item?.id}
          href={item?.path}
          isSelected={pathname === item?.path}
          passHref
        >
          {item?.title}
        </Item>
      ))}
    </Container>
  );
};

export default NavBar;
