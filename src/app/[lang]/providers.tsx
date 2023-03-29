'use client';

import React from 'react';
import { I18nProvider } from '@/libs/i18n/hooks/useI18n';
import { AuthProvider } from '@/libs/auth/hooks/useAuth';
import type { I18nDictionary } from '@/libs/i18n/types';

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
