'use client';

import React from 'react';
import { I18nProvider } from '@/i18n/useI18n';
import { AuthProvider } from '@/domain/auth/hooks/useAuth';
import type { I18nDictionary } from '@/i18n/types';

interface Props {
  locale: string;
  dictionary: I18nDictionary;
  children: React.ReactNode;
}

export const Providers: React.FC<Props> = ({
  locale,
  dictionary,
  children,
}) => {
  return (
    <AuthProvider>
      <I18nProvider locale={locale} dictionary={dictionary}>
        {children}
      </I18nProvider>
    </AuthProvider>
  );
};
