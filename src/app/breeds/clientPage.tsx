'use client';

import React from 'react';
import { GetBreedsResponse } from '../../domain/breed/apiTypes';
import { useGetBreedsInfinite } from '../../domain/breed/hooks/useGetBreedsInfinite';

interface Props {
  fallbackData: GetBreedsResponse[];
}

export const BreedsClientPage: React.FC<Props> = ({ fallbackData }) => {
  const {
    data: breeds,
    isLoadingMore,
    loadMore,
  } = useGetBreedsInfinite({ fallbackData });

  return (
    <>
      <ul>
        {breeds.map(({ breed }) => (
          <li key={breed}>Breed: {breed}</li>
        ))}
      </ul>
      <button type="button" disabled={isLoadingMore} onClick={loadMore}>
        {isLoadingMore ? 'Loading more ...' : 'Load More'}
      </button>
    </>
  );
};
