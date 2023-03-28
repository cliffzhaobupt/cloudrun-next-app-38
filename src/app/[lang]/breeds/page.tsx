import { Metadata } from 'next';
import { getBreeds } from '../../../domain/breed/services/getBreeds';
import { I18nDictionary } from '../../../i18n/types';
import { BreedsClientPage } from './clientPage';

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const { dictionary } = await import(`../../../i18n/dictionaries/${lang}`);
  const dict: I18nDictionary = dictionary;

  return {
    title: dict['page_breed_list_title'],
    description: dict['page_breed_list_description'],
  };
}

export default async function BreedsPage() {
  const fallbackData = [await getBreeds({ page: 1 })];

  return <BreedsClientPage fallbackData={fallbackData} />;
}
