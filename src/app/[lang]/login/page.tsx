import type { I18nDictionary } from '@/libs/i18n/types';
import type { Metadata } from 'next';
import { LoginClientPage } from './clientPage';

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const { dictionary } = await import(`@/libs/i18n/dictionaries/${lang}`);
  const dict: I18nDictionary = dictionary;

  return {
    title: dict['page_login_title'],
    description: dict['page_login_description'],
  };
}

export default function LoginPage() {
  return <LoginClientPage />;
}
