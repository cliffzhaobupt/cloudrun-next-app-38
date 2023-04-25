'use client';

import React, { useCallback } from 'react';
import { useAuth } from '@/libs/auth/hooks/useAuth';
import { Header } from './Header';
import { useLogout } from '@/libs/auth/hooks/useLogout';

export const ConnectedHeader: React.FC = () => {
  const { isLoading, isLoggedIn } = useAuth();
  const { logout } = useLogout();

  const handleClickLogoutButton = useCallback(async () => {
    await logout();
    alert('ログアウトしました！');
  }, [logout]);

  return (
    <Header
      isLoadingAuth={isLoading}
      isLoggedIn={isLoggedIn}
      onClickLogoutButton={handleClickLogoutButton}
    />
  );
};
