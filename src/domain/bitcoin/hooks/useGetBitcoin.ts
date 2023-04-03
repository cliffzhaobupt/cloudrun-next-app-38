import useSWR from 'swr';
import type { GetBitcoinResponse } from '../apiTypes';
import type { BitcoinInfo } from '../entities';
import { getBitcoinSwrFetcher } from '../services/getBitcoin';

export function useGetBitcoin({
  fallbackData,
}: {
  fallbackData: GetBitcoinResponse;
}): {
  data: BitcoinInfo | undefined;
  isLoading: boolean;
  isError: boolean;
} {
  const { data, isLoading, error } = useSWR(['bitcoin'], getBitcoinSwrFetcher, {
    fallbackData,
  });

  return {
    data,
    isLoading: isLoading && fallbackData == null,
    isError: !!error,
  };
}
