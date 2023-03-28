'use client';

import React from 'react';
import { GetBreedsResponse } from '@/domain/breed/apiTypes';
import { useGetBreedsInfinite } from '@/domain/breed/hooks/useGetBreedsInfinite';
import { useI18n } from '@/i18n/useI18n';

interface Props {
  fallbackData: GetBreedsResponse[];
}

export const BreedsClientPage: React.FC<Props> = ({ fallbackData }) => {
  const { t } = useI18n();
  const {
    data: breeds,
    isLoadingMore,
    loadMore,
  } = useGetBreedsInfinite({ fallbackData });

  return (
    <>
      <h1>{t('page_breed_list_title')}</h1>
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
