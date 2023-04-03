'use client';

import React from 'react';
import { useI18n } from '@/libs/i18n/hooks/useI18n';
import { useGuestRedirect } from '@/libs/auth/hooks/useGuestRedirect';
import type { GetBitcoinResponse } from '@/domain/bitcoin/apiTypes';
import { useGetBitcoin } from '@/domain/bitcoin/hooks/useGetBitcoin';

interface Props {
  fallbackData: GetBitcoinResponse;
}

export const BitcoinClientPage: React.FC<Props> = ({ fallbackData }) => {
  const { t } = useI18n();

  useGuestRedirect();

  const { data: bitcoinInfo } = useGetBitcoin({ fallbackData });

  return (
    <>
      <h1>{t('page_bitcoin_title')}</h1>
      {bitcoinInfo != null && (
        <dl>
          <dt>Update time</dt>
          <dd>{bitcoinInfo.time.updatedISO}</dd>
          <dt>USD rate</dt>
          <dd>{bitcoinInfo.bpi.USD.rate}</dd>
          <dt>EUR rate</dt>
          <dd>{bitcoinInfo.bpi.EUR.rate}</dd>
        </dl>
      )}
    </>
  );
};
