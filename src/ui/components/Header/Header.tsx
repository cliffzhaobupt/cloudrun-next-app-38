import { useI18n } from '@/libs/i18n/hooks/useI18n';
import React from 'react';
import { InternalLink } from '../InternalLink';

interface Props {
  isLoadingAuth: boolean;
  isLoggedIn: boolean;
  onClickLogoutButton(): void;
}

export const Header: React.FC<Props> = ({
  isLoadingAuth,
  isLoggedIn,
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
                <InternalLink href="/login">
                  {t('layout_login_link')}
                </InternalLink>
              ))}
          </li>
          <li>
            {!isLoadingAuth && !isLoggedIn && (
              <InternalLink href="/register">
                {t('layout_register_link')}
              </InternalLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};
