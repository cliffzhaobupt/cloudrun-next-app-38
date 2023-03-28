import React, { createContext, useContext, useEffect, useState } from 'react';

type AuthContextType = {
  isLoading: boolean;
  isLoggedIn: boolean;
};

const AuthContext = createContext<AuthContextType>({
  isLoading: true,
  isLoggedIn: false,
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (document.cookie.includes('token')) {
      setIsLoggedIn(true);
    }
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        isLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
