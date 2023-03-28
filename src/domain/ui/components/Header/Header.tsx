import { useI18n } from '@/i18n/useI18n';
import Link from 'next/link';
import React from 'react';

interface Props {
  isLoadingAuth: boolean;
  isLoggedIn: boolean;
}

export const Header: React.FC<Props> = ({ isLoadingAuth, isLoggedIn }) => {
  const { t } = useI18n();

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/breeds">{t('layout_breed_list_link')}</Link>
          </li>
          <li>
            <Link href="/bitcoin">{t('layout_bitcoin_link')}</Link>
          </li>
          <li>
            <Link href="/">{t('layout_back_to_top_btn_label')}</Link>
          </li>
          <li>
            {isLoadingAuth && <span>Loading auth...</span>}
            {!isLoadingAuth &&
              (isLoggedIn ? (
                <span>Logged in</span>
              ) : (
                <Link href="/login">Login</Link>
              ))}
          </li>
        </ul>
      </nav>
    </header>
  );
};
