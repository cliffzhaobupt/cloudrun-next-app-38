import { useI18n } from '@/libs/i18n/hooks/useI18n';
import React from 'react';
import { InternalLink } from '../InternalLink';

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
            <InternalLink href="/breeds">
              {t('layout_breed_list_link')}
            </InternalLink>
          </li>
          <li>
            <InternalLink href="/bitcoin">
              {t('layout_bitcoin_link')}
            </InternalLink>
          </li>
          <li>
            <InternalLink href="/">
              {t('layout_back_to_top_btn_label')}
            </InternalLink>
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
