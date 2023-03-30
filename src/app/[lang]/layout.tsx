import { Header } from '@/ui/components/Header';
import { Providers } from './providers';
import '../reset.css';

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const { dictionary } = await import(`@/libs/i18n/dictionaries/${lang}`);

  return (
    <html lang={lang}>
      <head>
        <link rel="icon" type="image/x-icon" href="/assets/favicon.ico" />
      </head>
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
