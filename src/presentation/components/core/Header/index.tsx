import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useRef, useState } from 'react';
import { useRouter } from 'next/router';

import Logo from './Logo';
import Profile from './Profile';
import Chart from './Cart';
import Search from './Search';
import NavBar from './NavBar';
import { ContentMobile } from '../../ui/Views/mobile';
import { ContentDesktop } from '../../ui/Views/desktop';

import { Container, Content, RightContent } from './styles';
import { Input, ButtonSearch } from './Search/styles';

const Header: React.FC = () => {
  const buttonRef = useRef(null);
  const { push } = useRouter();

  const [isOpenSearch, setIsOpenSearch] = useState(true);
  const [term, setTerm] = useState('');

  const handlePressKey = (event: any) => {
    if (event?.key !== 'Enter') return;

    if (term) push(`/busca?q=${term}`);
  };

  return (
    <Container>
      <Content>
        <Logo />

        <RightContent>
          <ContentDesktop fullWidth>
            <Search />
          </ContentDesktop>

          <ContentMobile>
            <ButtonSearch
              ref={buttonRef}
              isOpenSearch={isOpenSearch}
              onClick={() => setIsOpenSearch(!isOpenSearch)}
            >
              {isOpenSearch ? <SearchIcon /> : <CloseIcon />}
            </ButtonSearch>
          </ContentMobile>

          <Profile />
          <Chart />
        </RightContent>
      </Content>

      <ContentMobile fullWidth>
        <Input
          placeholder="Pesquise aqui..."
          isOpenSearch={isOpenSearch}
          onKeyDown={handlePressKey}
          onChange={event => setTerm(event.target.value)}
        />
      </ContentMobile>

      <NavBar />
    </Container>
  );
};

export default Header;
