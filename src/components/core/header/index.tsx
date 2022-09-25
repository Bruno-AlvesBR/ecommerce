import Logo from './Logo';
import Profile from './Profile';
import Chart from './Cart';
import Search from './Search';

import { Container, Content, RightContent } from './styles';
import NavBar from './NavBar';

const Header: React.FC = () => (
  <Container>
    <Content>
      <Logo />
      <RightContent>
        <Search />
        <Profile />
        <Chart notifiesCount={3} />
      </RightContent>
    </Content>
    <NavBar />
  </Container>
);

export default Header;
