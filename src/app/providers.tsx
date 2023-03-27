'use client';

import React from 'react';
import { AuthProvider } from '../domain/auth/hooks/useAuth';

interface Props {
  children: React.ReactNode;
}

export const Providers: React.FC<Props> = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
