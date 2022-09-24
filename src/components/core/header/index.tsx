import Logo from './Logo';
import Profile from './Profile';
import Chart from './Cart';
import Search from './Search';

import { Container, Content, RightContent } from './styles';

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
  </Container>
);

export default Header;
