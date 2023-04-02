import Logo from './Logo';
import Profile from './Profile';
import Chart from './Cart';
import Search from './Search';
import NavBar from './NavBar';

import { Container, Content, RightContent } from './styles';

const Header: React.FC = () => (
  <Container>
    <Content>
      <Logo />

      <RightContent>
        <Search />
        <Profile />
        <Chart />
      </RightContent>
    </Content>

    <NavBar />
  </Container>
);

export default Header;
