import { Header } from '@/ui/components/Header';
import { Providers } from './providers';

export default async function LocaleRootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const { dictionary } = await import(`@/libs/i18n/dictionaries/${lang}`);

  return (
    <html lang={lang}>
      <body>
        <Providers locale={lang} dictionary={dictionary}>
          <Header />
          <br />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
