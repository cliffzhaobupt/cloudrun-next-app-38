export function extractLocale({
  acceptLanguageHeader,
  locales,
  defaultLocale,
}: {
  acceptLanguageHeader: string | null;
  locales: string[];
  defaultLocale: string;
}): string {
  if (acceptLanguageHeader == null) {
    return defaultLocale;
  }

  let curLocale: string | null = null;
  let curPos: number | null = null;

  locales.forEach((locale) => {
    const pos = acceptLanguageHeader.indexOf(locale);
    if (pos > -1 && (curPos == null || pos < curPos)) {
      curLocale = locale;
      curPos = pos;
    }
  });

  return curLocale ?? defaultLocale;
}
