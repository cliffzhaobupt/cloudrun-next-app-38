import type { I18nDictionary } from '@/libs/i18n/types';
import type { Metadata } from 'next';
import { RegisterClientPage } from './clientPage';

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const { dictionary } = await import(`@/libs/i18n/dictionaries/${lang}`);
  const dict: I18nDictionary = dictionary;

  return {
    title: dict['page_register_title'],
    description: dict['page_register_description'],
  };
}

export default function RegisterPage() {
  return <RegisterClientPage />;
}
