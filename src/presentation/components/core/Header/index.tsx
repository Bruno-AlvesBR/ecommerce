import { useRef, useState } from 'react';
import { useRouter } from 'next/router';

import Logo from './Logo';
import { Profile } from './Profile';
import { Cart } from './Cart';
import Search from './Search';
import { NavBar } from './NavBar';
import { MobileView } from '../../ui/Views/mobile';
import { DesktopView } from '../../ui/Views/desktop';
import { Input } from './Search/Input';
import { Button } from './Search/Button';

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
    <div
      id="header"
      className="relative sm:gap-1 lg:px-2 pt-1 bg-white1000 border-b-[1px] border-black1000 flex p-0 flex-col gap-2"
    >
      <div className="md:gap-4 relative w-full max-w-[1280px] flex items-center justify-between flex-row mx-auto gap-8 h-full">
        <Logo />
        <div className="sm:gap-2 relative w-full flex items-center justify-end gap-4">
          <DesktopView fullWidth>
            <Search />
          </DesktopView>

          <MobileView>
            <Button
              buttonRef={buttonRef}
              isOpenSearch={isOpenSearch}
              setIsOpenSearch={setIsOpenSearch}
            />
          </MobileView>

          <Profile />
          <Cart />
        </div>
      </div>

      <MobileView fullWidth>
        <Input
          isOpenSearch={isOpenSearch}
          handlePressKey={handlePressKey}
          setTerm={setTerm}
        />
      </MobileView>

      <NavBar />
    </div>
  );
};

export { Header };
