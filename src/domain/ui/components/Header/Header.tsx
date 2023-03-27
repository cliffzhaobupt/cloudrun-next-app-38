import Link from 'next/link';
import React from 'react';

interface Props {
  isLoadingAuth: boolean;
  isLoggedIn: boolean;
}

export const Header: React.FC<Props> = ({ isLoadingAuth, isLoggedIn }) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/breeds">Breeds</Link>
          </li>
          <li>
            <Link href="/">Back to Top</Link>
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
