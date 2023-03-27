'use client';

import React from 'react';
import { useAuth } from '../../../auth/hooks/useAuth';
import { Header } from './Header';

export const ConnectedHeader: React.FC = () => {
  const { isLoading, isLoggedIn } = useAuth();

  return <Header isLoadingAuth={isLoading} isLoggedIn={isLoggedIn} />;
};
