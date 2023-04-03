import { getBitcoin } from '@/domain/bitcoin/services/getBitcoin';
import type { I18nDictionary } from '@/libs/i18n/types';
import type { Metadata } from 'next';
import { BitcoinClientPage } from './clientPage';

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const { dictionary } = await import(`@/libs/i18n/dictionaries/${lang}`);
  const dict: I18nDictionary = dictionary;

  return {
    title: dict['page_bitcoin_title'],
    description: dict['page_bitcoin_description'],
  };
}

export default async function BitcoinPage() {
  const fallbackData = await getBitcoin();

  return <BitcoinClientPage fallbackData={fallbackData} />;
}
