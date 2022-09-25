import theme from '@/styles/theme';
import { useMediaQuery } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { listNav } from './List';

import { Container, Item } from './styles';

const NavBar: React.FC = () => {
  const { pathname } = useRouter();
  const isMobile = useMediaQuery(theme?.breakpoints?.down(1150));

  return (
    <Container>
      {!isMobile ? (
        listNav?.map(item => (
          <Link key={item?.id} href={`/${item?.id}`} passHref>
            <Item isSelected={pathname === `/${item?.id}`}>
              {item?.title}
            </Item>
          </Link>
        ))
      ) : (
        <></>
      )}
    </Container>
  );
};

export default NavBar;
