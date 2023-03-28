import { getBitcoin } from '@/domain/bitcoin/services/getBitcoin';
import type { I18nDictionary } from '@/i18n/types';
import type { Metadata } from 'next';
import { BitcoinClientPage } from './clientPage';

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const { dictionary } = await import(`@/i18n/dictionaries/${lang}`);
  const dict: I18nDictionary = dictionary;

  return {
    title: dict['page_bitcoin_title'],
    description: dict['page_bitcoin_description'],
  };
}

export default async function BitcoinPage() {
  const bitcoinInfo = await getBitcoin();

  return <BitcoinClientPage bitcoinInfo={bitcoinInfo} />;
}
