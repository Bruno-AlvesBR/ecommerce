import { NextRequest, NextResponse } from 'next/server';

import { AUTH_COOKIE } from './utils/constants';

export function middleware(request: NextRequest) {
  const token = request.cookies.has(AUTH_COOKIE);
  const authPages = request.url.includes('/autenticacao');
  const profilePage = request.url.includes('/perfil');

  if (!token && profilePage)
    return NextResponse.redirect(
      new URL(
        `/autenticacao/logar?redirect=${request.url}`,
        request.url,
      ),
    );

  if (authPages && token) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/perfil/:path*', '/autenticacao/:path*'],
};
