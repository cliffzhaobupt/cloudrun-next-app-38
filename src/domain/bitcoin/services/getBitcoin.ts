import type { GetBitcoinResponse } from '../apiTypes';

export async function getBitcoin(): Promise<GetBitcoinResponse> {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json', {
    next: {
      revalidate: 300,
    },
  });

  return res.json();
}

export async function getBitcoinSwrFetcher([_key]: [
  string
]): Promise<GetBitcoinResponse> {
  return getBitcoin();
}
