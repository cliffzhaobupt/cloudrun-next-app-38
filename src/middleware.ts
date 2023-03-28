import { NextRequest, NextResponse } from 'next/server';
import { i18n } from './i18n/config';
import { extractLocale } from './i18n/extractLocale';

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // i18n redirect
  if (
    !pathname.match(/\/(api|_next|assets|favicon.ico|manifest.json)/) &&
    !i18n.locales.some((locale) => pathname.startsWith(`/${locale}`))
  ) {
    const redirectLocale = extractLocale({
      acceptLanguageHeader: req.headers.get('accept-language'),
      locales: i18n.locales,
      defaultLocale: i18n.defaultLocale,
    });

    return NextResponse.redirect(
      new URL(`/${redirectLocale}${pathname === '/' ? '' : pathname}`, req.url)
    );
  }

  // Basic認証
  const basicAuth = req.headers.get('authorization');

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1];
    const [user, pwd] = atob(authValue).split(':');

    if (
      user === process.env.BASIC_AUTH_USERNAME &&
      pwd === process.env.BASIC_AUTH_PASSWORD
    ) {
      return NextResponse.next();
    }
  }

  return NextResponse.json(
    { message: 'Basic認証通ってへんやん！' },
    {
      status: 401,
      statusText: 'Unauthorized',
      headers: {
        'www-authenticate': 'Basic',
      },
    }
  );
}
