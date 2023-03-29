'use client';

import React from 'react';
import { useI18n } from '@/libs/i18n/hooks/useI18n';
import type { BitcoinInfo } from '@/domain/bitcoin/entities';
import { useGuestRedirect } from '@/libs/auth/hooks/useGuestRedirect';

interface Props {
  bitcoinInfo: BitcoinInfo;
}

export const BitcoinClientPage: React.FC<Props> = ({ bitcoinInfo }) => {
  useGuestRedirect();
  const { t } = useI18n();

  return (
    <>
      <h1>{t('page_bitcoin_title')}</h1>
      <dl>
        <dt>Update time</dt>
        <dd>{bitcoinInfo.time.updatedISO}</dd>
        <dt>USD rate</dt>
        <dd>{bitcoinInfo.bpi.USD.rate}</dd>
        <dt>EUR rate</dt>
        <dd>{bitcoinInfo.bpi.EUR.rate}</dd>
      </dl>
    </>
  );
};
