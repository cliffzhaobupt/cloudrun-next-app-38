import { GetBreedsResponse } from '../apiTypes';
import { Breed } from '../entities';
import useSWRInfinite from 'swr/infinite';
import { getBreedsSwrFetcher } from '../services/getBreeds';
import { useCallback } from 'react';

export function useGetBreedsInfinite({
  fallbackData,
}: {
  fallbackData?: GetBreedsResponse[];
}): {
  data: Breed[];
  isLoadingInitialData: boolean;
  isLoadingMore: boolean;
  isError: boolean;
  loadMore(): void;
} {
  const getKey = (
    pageIndex: number,
    previousPageData: GetBreedsResponse | null
  ) => [
    'breeds/infinite',
    pageIndex === 0
      ? 1
      : Number(
          /page=(\d*)$/.exec(previousPageData?.next_page_url ?? '')?.[1] ?? ''
        ),
  ];

  const { data, error, size, isLoading, setSize } = useSWRInfinite(
    getKey,
    getBreedsSwrFetcher,
    { fallbackData }
  );

  const loadMore = useCallback(() => {
    setSize((currentSize) => currentSize + 1);
  }, [setSize]);

  const isLoadingInitialData = isLoading && fallbackData == null;
  const isLoadingMore =
    !error && size > 0 && !!data && typeof data[size - 1] === 'undefined';

  return {
    data: data?.flatMap(({ data }) => data) ?? [],
    isError: !!error,
    isLoadingInitialData,
    isLoadingMore,
    loadMore,
  };
}
