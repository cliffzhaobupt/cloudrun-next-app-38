import { NextRequest, NextResponse } from 'next/server';
import { i18n } from './libs/i18n/config';
import { extractLocale } from './libs/i18n/extractLocale';

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
}
