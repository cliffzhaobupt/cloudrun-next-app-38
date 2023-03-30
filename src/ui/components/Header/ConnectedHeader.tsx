'use client';

import React, { useCallback } from 'react';
import { useAuth } from '@/libs/auth/hooks/useAuth';
import { Header } from './Header';

export const ConnectedHeader: React.FC = () => {
  const { isLoading, isLoggedIn, setIsLoggedIn } = useAuth();

  const handleClickLoginButton = useCallback(() => {
    document.cookie = 'token=token';
    setIsLoggedIn(true);
    alert('Congratulations! You have logged in!');
  }, [setIsLoggedIn]);

  const handleClickLogoutButton = useCallback(() => {
    document.cookie = '';
    setIsLoggedIn(false);
    alert('You have logged out!');
  }, [setIsLoggedIn]);

  return (
    <Header
      isLoadingAuth={isLoading}
      isLoggedIn={isLoggedIn}
      onClickLoginButton={handleClickLoginButton}
      onClickLogoutButton={handleClickLogoutButton}
    />
  );
};
