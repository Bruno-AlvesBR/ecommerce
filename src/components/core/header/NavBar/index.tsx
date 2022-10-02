import Link from 'next/link';
import { useRouter } from 'next/router';

import { listNav } from './List';

import { Container, Item } from './styles';

const NavBar: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <Container>
      {listNav?.map(item => (
        <Link key={item?.id} href={`/contents/${item?.id}`} passHref>
          <Item isSelected={pathname === `/contents/${item?.id}`}>
            {item?.title}
          </Item>
        </Link>
      ))}
    </Container>
  );
};

export default NavBar;
