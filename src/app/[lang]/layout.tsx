import { Header } from '../../domain/ui/components/Header';
import { Providers } from './providers';
import '../reset.css';

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const { dictionary } = await import(`../../i18n/dictionaries/${lang}`);

  return (
    <html lang={lang}>
      <head>
        <link rel="icon" type="image/x-icon" href="/assets/favicon.ico" />
      </head>
      <body>
        <Providers locale={lang} dictionary={dictionary}>
          <Header />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
