import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

import { cookies } from '@/utils/cookies';
import { Button } from '../Button';
import { ACCEPT_COOKIE_POLITIC } from '@/utils/constants';
import { useRouter } from 'next/router';

interface ICookieBanner {}

const CookieBanner: React.FC<ICookieBanner> = ({}) => {
  const { push } = useRouter();
  const [showBanner, setShowBanner] = useState(false);

  const handleAcceptCookiePolitic = () => {
    cookies.set(ACCEPT_COOKIE_POLITIC, JSON.stringify(true), {
      expires: dayjs().set('year', 2030).toDate(),
    });

    setShowBanner(false);
  };

  const handleRefuseCookiePolitic = () => {
    push('https://google.com');
  };

  useEffect(() => {
    const cookieToken = cookies.get(ACCEPT_COOKIE_POLITIC);

    if (!cookieToken || !JSON.parse(cookieToken)) setShowBanner(true);
  }, []);

  return showBanner ? (
    <>
      <div className="fixed top-0 w-[100vw] h-[100vh] bg-black1000 opacity-60 z-50" />

      <div className="sm:px-6 top-0 sm:top-auto sm:bottom-0 sm:py-8 flex justify-center w-[100vw] h-fit bg-white1000 fixed z-50 px-10 py-12">
        <div className="sm:gap-4 sm:flex-col flex flex-row items-center justify-start gap-4 w-full max-w-[1280px]">
          <p className="text-4">
            Ao clicar em aceitar, você estará aceitando as políticas
            de uso de cookies (coleta e armazenamento de dados de
            navegação)
          </p>
          <div className="sm:w-full sm:gap-2 sm:flex-col gap-4 flex flex-row items-end">
            <Button
              className="bg-red800"
              onClick={handleRefuseCookiePolitic}
            >
              Recusar
            </Button>
            <Button
              className="sm:w-full"
              onClick={handleAcceptCookiePolitic}
            >
              Aceitar
            </Button>
          </div>
        </div>
      </div>
    </>
  ) : null;
};

export { CookieBanner };
