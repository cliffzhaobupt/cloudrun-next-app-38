import { useI18n } from '@/libs/i18n/hooks/useI18n';
import Link from 'next/link';
import React from 'react';

interface Props {
  isLoadingAuth: boolean;
  isLoggedIn: boolean;
  onClickLoginButton(): void;
  onClickLogoutButton(): void;
}

export const Header: React.FC<Props> = ({
  isLoadingAuth,
  isLoggedIn,
  onClickLoginButton,
  onClickLogoutButton,
}) => {
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
                <button type="button" onClick={onClickLogoutButton}>
                  Logout
                </button>
              ) : (
                <button type="button" onClick={onClickLoginButton}>
                  Login
                </button>
              ))}
          </li>
        </ul>
      </nav>
    </header>
  );
};
