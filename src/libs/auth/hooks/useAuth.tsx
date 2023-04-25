import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, onIdTokenChanged } from 'firebase/auth';
import type { User } from 'firebase/auth';
import { firebaseApp } from '../firebaseApp';

type AuthContextType = {
  isLoading: boolean;
  isLoggedIn: boolean;
  user: User | null;
  token: string | null;
};

const AuthContext = createContext<AuthContextType>({
  isLoading: true,
  isLoggedIn: false,
  user: null,
  token: null,
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const auth = getAuth(firebaseApp);
    auth.tenantId = process.env
      .NEXT_PUBLIC_IDENTITY_PROVIDER_TENANT_ID as string;

    onIdTokenChanged(auth, async (user) => {
      if (user == null) {
        setToken(null);
        setIsLoggedIn(false);
        setUser(null);
      } else {
        const token = await user.getIdToken();
        setToken(token);
        setIsLoggedIn(true);
        setUser(user);
      }
      setIsLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        isLoggedIn,
        user,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
