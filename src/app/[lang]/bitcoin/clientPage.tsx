'use client';

import React from 'react';
import { useI18n } from '@/i18n/useI18n';
import type { BitcoinInfo } from '@/domain/bitcoin/entities';

interface Props {
  bitcoinInfo: BitcoinInfo;
}

export const BitcoinClientPage: React.FC<Props> = ({ bitcoinInfo }) => {
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
